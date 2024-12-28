import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, List, ListItem, ListItemText } from '@mui/material';
import { database } from '../../firebase';
import { ref, push, onValue } from 'firebase/database';

const Comunidade = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const commentsRef = ref(database, 'comments');
        onValue(commentsRef, (snapshot) => {
            const data = snapshot.val();
            const commentsList = data ? Object.values(data) : [];
            setComments(commentsList);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && comment) {
            const commentsRef = ref(database, 'comments');
            push(commentsRef, { name, comment });
            setName('');
            setComment('');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Comunidade</h1>
            <h3>Bem-vindo à comunidade de entusiastas de PS2.</h3>
            <p>Diga em baixo o que voce acha da comunidade, deixe sua opinião ou critica. Vamos juntos aumentar essa comunidade, de forma a alcançar todos que também amam a nostalgiia do PS2.</p>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <TextField
                    label="Nome"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    style={{ marginBottom: '10px' }}
                />
                <TextField
                    label="Comentário"
                    variant="outlined"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                    style={{ marginBottom: '10px' }}
                />
                <Button variant="contained" color="primary" type="submit">
                    Enviar
                </Button>
            </form>
            <List>
                {comments.map((c, index) => (
                    <ListItem key={index} alignItems="flex-start">
                        <ListItemText
                            primary={c.name}
                            secondary={
                                <Typography component="span" variant="body2" color="textPrimary">
                                    {c.comment}
                                </Typography>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Comunidade;