import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@material-ui/core';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import godOfWar from '../../assets/god-of-war.jpeg';
import needForSpeed from '../../assets/need-under-2.jpeg';
import shadowOfTheColossus from '../../assets/shadow-of-the-colossus.jpeg';
import redDeadRevolver from '../../assets/red-dead-revolver.jpg';
import spiderMen2 from '../../assets/spider-man-2.jpg';
import sniperElite from '../../assets/sniper-elite.webp';

const useStyles = makeStyles((theme) => ({
    card: {
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: theme.shadows[6],
            zIndex: 1,
        },
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    cardMedia: {
        height: 400,
        objectFit: 'cover',
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
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 0,
    },
    button: {
        alignSelf: 'center',
        marginTop: 'auto',
    },
}));

const ISOs = () => {
    const classes = useStyles();
    const [hovered, setHovered] = useState(false);

    const games = [
        { title: 'God of War', description: 'Embarque em uma jornada épica com Kratos nesta aventura cheia de ação ambientada na Grécia antiga.', image: godOfWar, link: 'https://drive.google.com/file/d/1mKWcU-m4CXj37QPlUyDxY4O7vkURNQNN/view?usp=share_link' },
        { title: 'Need for Speed Underground 2', description: 'Corra pelas ruas nesta emocionante sequência, com carros personalizáveis e corridas de rua intensas.', image: needForSpeed, link: 'https://drive.google.com/file/d/11mW64yMp8M8CjvXu6QMo1FLh6V4aL5P9/view?usp=share_link' },
        { title: 'Shadow Of The Colossus', description: 'Explore um vasto mundo misterioso e derrote colossos gigantes nesta aclamada aventura de ação.', image: shadowOfTheColossus, link: 'https://drive.google.com/file/d/1xs2QiA8nEf4rHxK71-sWuxhu7fOZAJAv/view?usp=share_link' },
        { title: 'Red Dead Revolver', description: 'Viva o Velho Oeste em uma aventura cheia de ação e tiroteios intensos.', image: redDeadRevolver, link: 'https://drive.google.com/file/d/1dNw2aaGVHqPMp-tgm2Tr0UOI_M8eJGEW/view?usp=share_link' },
        { title: 'Spider-Man 2', description: 'Balance pelas ruas de Nova York como o Homem-Aranha em uma emocionante aventura.', image: spiderMen2, link: 'https://drive.google.com/file/d/19aGNJLZciPXYrvfz4C0iZkj7ScA6RFl5/view?usp=share_link' },
        { title: 'Sniper Elite', description: 'Assuma o papel de um atirador de elite na Segunda Guerra Mundial e complete missões furtivas.', image: sniperElite, link: 'https://drive.google.com/file/d/17JzEBMKyUjMCBH31EKgo_pvhfqFzkIoL/view?usp=share_link' },
    ];

    return (
        <div style={{ padding: 20 }}>
            <h1>Baixe gratuitamente todas as ISO`s da nossa comunidade!</h1>
            <h2>E o melhor de tudo, sem anúncios, sem enganação</h2>
            {hovered && <div className={classes.overlay} />}
            <Grid container spacing={10} style={{ padding: 50 }}>
                {games.map((game, index) => (
                    <Grid item key={index} xs={12} sm={4} md={3}>
                        <Card
                            className={classes.card}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <CardMedia
                                className={classes.cardMedia}
                                component="img"
                                alt={game.title}
                                image={game.image}
                                title={game.title}
                            />
                            <CardContent className={classes.cardContent}>
                                <div>
                                    <Typography variant="h5" component="h2">
                                        {game.title}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {game.description}
                                    </Typography>
                                </div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    href={game.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download Grátis
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ISOs;