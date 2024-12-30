import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, TextField, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from 'react-responsive';
import { database } from '../../firebase';
import { ref, get, update, set, increment } from 'firebase/database';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import gamesFromFile from './games'; 
import GoogleDriveIcon from '../../assets/icons/google-drive-icon.svg';
import UtorrentIcon from '../../assets/icons/utorrent-icon.svg';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 350,
        width: '100%',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 0,
        marginTop: 2,
        position: 'relative',
    },
    cardHovered: {
        transform: 'scale(1.05)',
        zIndex: 3,
    },
    cardNotHovered: {
        zIndex: 0,
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%',
        backgroundSize: 'contain',
    },
    cardContent: {
        flexGrow: 0,
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
        zIndex: 2,
    },
    button: {
        alignSelf: 'center',
        marginTop: 'auto',
    },
    torrentButton: {
        backgroundColor: 'green',
        color: 'white',
        marginLeft: '10px',
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '20px',
        justifyContent: 'center'
    },
    paginationContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
    },
}));

const ISOs = () => {
    const classes = useStyles();
    const [hovered, setHovered] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [downloads, setDownloads] = useState({});
    const [games, setGames] = useState(gamesFromFile);
    const [sortByDownloads, setSortByDownloads] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const [overlayBackground, setOverlayBackground] = useState('rgba(161, 161, 161, 0.25)');

    useEffect(() => {
        const fetchGames = async () => {
            const gamesRef = ref(database, 'games');
            const snapshot = await get(gamesRef);
            if (snapshot.exists()) {
                const gamesData = snapshot.val();
                setGames(Object.values(gamesData));

                const gamesFromDatabase = Object.values(gamesData).map(game => game.title);
                const missingGames = gamesFromFile.filter(game => !gamesFromDatabase.includes(game.title));

                missingGames.forEach(async (game) => {
                    const newGameRef = ref(database, `games/${game.title}`);
                    await set(newGameRef, game);
                });

                const updatedSnapshot = await get(gamesRef);
                if (updatedSnapshot.exists()) {
                    const updatedGamesData = updatedSnapshot.val();
                    setGames(Object.values(updatedGamesData));
                }
            }
        };

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

        fetchGames();
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

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const sortedGames = games.sort((a, b) => {
        if (sortByDownloads) {
            return (downloads[b.title] || 0) - (downloads[a.title] || 0);
        }
        return a.title.localeCompare(b.title);
    });

    const filteredGames = sortedGames.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastGame = currentPage * itemsPerPage;
    const indexOfFirstGame = indexOfLastGame - itemsPerPage;
    const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredGames.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div style={{ paddingTop: 20, paddingLeft: isMobile ? 20 : 200, paddingRight: isMobile ? 20 : 200 }}>
            {hovered !== null && <div className={classes.overlay} style={{ backgroundColor: overlayBackground }} />}
            <h1>Baixe gratuitamente todas as {games.length} ISO`s da nossa comunidade!</h1>
            <h2>E o melhor de tudo, sem anúncios, sem enganação</h2>
            <p>Nossas ISOs estão tanto no Google Drive quanto no Torrent, se optar pelo google drive será redirecionado para lá apenas.</p>
            <div className={classes.searchContainer}>
                <TextField
                    label="Pesquisar ISOs"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setSortByDownloads(!sortByDownloads)}
                    style={{ marginLeft: '10px' }}
                >
                    Mais Baixados
                </Button>
            </div>
            {sortByDownloads ? (
                <Typography variant="h6" component="div" style={{ marginBottom: '20px' }}>
                    Listando pelos mais Baixados
                </Typography>
            ) : searchTerm ? (
                <Typography variant="h6" component="div" style={{ marginBottom: '20px' }}>
                    Buscando...
                </Typography>
            ) : (
                <Typography variant="h6" component="div" style={{ marginBottom: '20px' }}>
                    Listando por ordem alfabética
                </Typography>
            )}
            <Grid container spacing={isMobile ? 2 : 10} style={{ padding: isMobile ? 10 : 50 }}>
                {currentGames.map((game, index) => (
                    <Grid item key={index} xs={12} sm={6} md={6} lg={3}>
                        <Card
                            className={`${classes.card} ${hovered === index ? classes.cardHovered : classes.cardNotHovered}`}
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
                                sx={{ marginTop: 3 }}
                            />
                            <CardContent className={classes.cardContent}>
                                <div>
                                    <Typography variant="h6" component="h6">
                                        <strong>{game.title}</strong>
                                    </Typography>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href={game.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.button}
                                        onClick={() => handleDownload(game.title)}
                                        startIcon={<img  src={GoogleDriveIcon} width={16} height={16} style={{marginRight: '-10'}}/>} 
                                        onMouseEnter={() => setOverlayBackground('rgba(35, 81, 230, 0.37)')} // Azul
                                        onMouseLeave={() => setOverlayBackground('rgba(161, 161, 161, 0.25)')}
                                    >
                                        Download
                                    </Button>
                                    {game.linkTorrent && game.linkTorrent.length > 0 && (
                                        <Button
                                            variant="contained"
                                            href={game.linkTorrent}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={classes.torrentButton}
                                            onClick={() => handleDownload(game.title)}  
                                            startIcon={<img  src={UtorrentIcon} width={16} height={16} style={{marginRight: '-10'}}/>} 
                                            onMouseEnter={() => setOverlayBackground('rgba(47, 151, 47, 0.41)')} // Verde
                                            onMouseLeave={() => setOverlayBackground('rgba(161, 161, 161, 0.25)')}
                                        >
                                            Torrent
                                        </Button>
                                    )}
                                </div>
                                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                                    Downloads: {downloads[game.title] || 0}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.paginationContainer}>
                <IconButton onClick={handlePreviousPage} disabled={currentPage === 1}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="body1" component="div">
                    Página {currentPage} de {Math.ceil(filteredGames.length / itemsPerPage)}
                </Typography>
                <IconButton onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredGames.length / itemsPerPage)}>
                    <ArrowForwardIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default ISOs;