import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const ISOs = () => {
    const games = [
        { title: 'Game 1', description: 'Description for Game 1' },
        { title: 'Game 2', description: 'Description for Game 2' },
        { title: 'Game 3', description: 'Description for Game 3' },
    ];

    return (
        <div>
            <h1>ISOs PS2</h1>
            <Grid container spacing={3}>
                {games.map((game, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {game.title}
                                </Typography>
                                <Typography color="textSecondary">
                                    {game.description}
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