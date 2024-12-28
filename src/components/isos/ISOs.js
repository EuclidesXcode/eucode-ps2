import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from 'react-responsive';
import { database } from '../../firebase';
import { ref, get, update, increment } from 'firebase/database';
import games from './games';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 350,
        width: '100%',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 1,
        marginTop: 2,
    },
    cardHovered: {
        transform: 'scale(1.05)',
        zIndex: 2,
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain',
    },
    cardContent: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
    button: {
        alignSelf: 'center',
        marginTop: 'auto',
    },
    searchField: {
        marginBottom: '20px',
    },
}));

const ISOs = () => {
    const classes = useStyles();
    const [hovered, setHovered] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [downloads, setDownloads] = useState({});

    useEffect(() => {
        const fetchDownloads = async () => {
            const downloadsRef = ref(database, 'downloads');
            const snapshot = await get(downloadsRef);
            if (snapshot.exists()) {
                const data = snapshot.val();
                const formattedDownloads = Object.keys(data).reduce((acc, key) => {
                    acc[key] = data[key].count;
                    return acc;
                }, {});
                setDownloads(formattedDownloads);
            }
        };

        fetchDownloads();
    }, []);

    const handleDownload = async (gameTitle) => {
        const downloadsRef = ref(database, `downloads/${gameTitle}`);
        await update(downloadsRef, { count: increment(1) });
        setDownloads((prevDownloads) => ({
            ...prevDownloads,
            [gameTitle]: (prevDownloads[gameTitle] || 0) + 1,
        }));
    };

    // Detectar se está em um dispositivo móvel
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    // Ordenar jogos em ordem alfabética
    const sortedGames = games.sort((a, b) => a.title.localeCompare(b.title));

    // Filtrar jogos com base no termo de pesquisa
    const filteredGames = sortedGames.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ paddingTop: 20, paddingLeft: isMobile ? 20 : 200, paddingRight: isMobile ? 20 : 200 }}>
            <h1>Baixe gratuitamente todas as ISO`s da nossa comunidade!</h1>
            <h2>E o melhor de tudo, sem anúncios, sem enganação</h2>
            <p>Todas nossas ISOs estão no Goolge Drive, então voce será redirecionado ao Google Drive quando clicar em download! Não se preocupe, todas nossas ISOs são testadas antes de vir pra cá!</p>
            <TextField
                label="Pesquisar ISOs"
                variant="outlined"
                fullWidth
                className={classes.searchField}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {hovered !== null && <div className={classes.overlay} />}
            <Grid container spacing={isMobile ? 2 : 10} style={{ padding: isMobile ? 10 : 50 }}>
                {filteredGames.map((game, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card
                            className={`${classes.card} ${hovered === index ? classes.cardHovered : ''}`}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            sx={{ borderRadius: 5 }}
                        >
                            <CardMedia
                                className={classes.cardMedia}
                                component="div"
                                alt={game.title}
                                image={game.image}
                                title={game.title}
                                sx={{ marginTop: 4 }}
                            />
                            <CardContent className={classes.cardContent}>
                                <div>
                                    <Typography variant="h6" component="h6">
                                        <strong>{game.title}</strong>
                                    </Typography>
                                </div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={game.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.button}
                                    onClick={() => handleDownload(game.title)}
                                >
                                    Download
                                </Button>
                                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                                    Downloads: {downloads[game.title] || 0}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ISOs;