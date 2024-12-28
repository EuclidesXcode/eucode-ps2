import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@material-ui/core';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import godOfWar from '../../assets/god-of-war.jpeg';
import needForSpeed from '../../assets/need-under-2.jpeg';
import shadowOfTheColossus from '../../assets/shadow-of-the-colossus.jpeg';

const useStyles = makeStyles((theme) => ({
    card: {
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: theme.shadows[6],
            zIndex: 1,
        },
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
}));

const ISOs = () => {
    const classes = useStyles();
    const [hovered, setHovered] = useState(false);

    const games = [
        { title: 'God of War', description: 'Embarque em uma jornada épica com Kratos nesta aventura cheia de ação ambientada na Grécia antiga.', image: godOfWar },
        { title: 'Need for Speed Underground 2', description: 'Corra pelas ruas nesta emocionante sequência, com carros personalizáveis e corridas de rua intensas.', image: needForSpeed },
        { title: 'Shadow Of The Colossus', description: 'Explore um vasto mundo misterioso e derrote colossos gigantes nesta aclamada aventura de ação.', image: shadowOfTheColossus },
    ];

    return (
        <div style={{ padding: 20 }}>
            <h1>ISOs PS2</h1>
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
                                component="img"
                                alt={game.title}
                                image={game.image}
                                title={game.title}
                                style={{ marginTop: 10 }}
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {game.title}
                                </Typography>
                                <Typography color="textSecondary">
                                    {game.description}
                                </Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
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