import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Modal, Box, Snackbar, Alert } from '@mui/material';
import { database } from '../../firebase';
import { ref, push, onValue } from 'firebase/database';
import ReplyIcon from '@mui/icons-material/Reply';
import { useMediaQuery } from 'react-responsive';

const Comunidade = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [reply, setReply] = useState('');
    const [replyTo, setReplyTo] = useState(null);
    const [open, setOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);

    const forbiddenWords = ['palavrão1', 'palavrão2', 'palavrão3']; // Adicione as palavras proibidas aqui

    useEffect(() => {
        const commentsRef = ref(database, 'comments');
        onValue(commentsRef, (snapshot) => {
            const data = snapshot.val();
            const commentsList = data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : [];
            // Ordenar os comentários mais recentes primeiro
            commentsList.sort((a, b) => b.timestamp - a.timestamp);
            setComments(commentsList);
        });
    }, []);

    const containsForbiddenWords = (text) => {
        return forbiddenWords.some(word => text.toLowerCase().includes(word));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (containsForbiddenWords(comment)) {
            setAlertOpen(true);
            return;
        }
        if (name && comment) {
            const commentsRef = ref(database, 'comments');
            push(commentsRef, { name, comment, replies: [], timestamp: Date.now() });
            setName('');
            setComment('');
        }
    };

    const handleReplySubmit = (e) => {
        e.preventDefault();
        if (containsForbiddenWords(reply)) {
            setAlertOpen(true);
            return;
        }
        if (replyTo && reply) {
            const commentRef = ref(database, `comments/${replyTo}/replies`);
            push(commentRef, { name, comment: reply, timestamp: Date.now() });
            setReply('');
            setReplyTo(null);
            setOpen(false);
        }
    };

    const handleReplyClick = (id) => {
        setReplyTo(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setReply('');
        setReplyTo(null);
    };

    const handleAlertClose = () => {
        setAlertOpen(false);
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    };

    const renderReplies = (replies) => {
        return (
            <List component="div" disablePadding style={{ paddingLeft: '20px' }}>
                {Object.entries(replies).map(([id, reply]) => (
                    <div key={id}>
                        <ListItem alignItems="flex-start" style={{ backgroundColor: '#ECF7E3', marginBottom: '10px' }}>
                            <ListItemText
                                primary={`${reply.name} - ${formatDate(reply.timestamp)}`}
                                secondary={
                                    <Typography component="span" variant="body2" color="textPrimary">
                                        {reply.comment}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </div>
                ))}
            </List>
        );
    };

    // Detectar se está em um dispositivo móvel
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <div style={{ paddingLeft: isMobile ? 20 : 200, paddingRight: isMobile ? 20 : 200 }}>
            <h1>Comunidade</h1>
            <h3>Bem-vindo à comunidade de entusiastas de PS2.</h3>
            <p>Diga em baixo o que voce acha da comunidade, deixe sua opinião ou critica. Vamos juntos aumentar essa comunidade, de forma a alcançar todos que também amam a nostalgia do PS2.</p>
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
                {comments.map((c) => (
                    <div key={c.id}>
                        <ListItem alignItems="flex-start" style={{ backgroundColor: '#c2c2c2', marginBottom: '10px' }}>
                            <ListItemText
                                primary={`${c.name} - ${formatDate(c.timestamp)}`}
                                secondary={
                                    <Typography component="span" variant="body2" color="textPrimary">
                                        {c.comment}
                                    </Typography>
                                }
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="reply" onClick={() => handleReplyClick(c.id)}>
                                    <ReplyIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        {c.replies && renderReplies(c.replies)}
                    </div>
                ))}
            </List>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                    <form onSubmit={handleReplySubmit}>
                        <TextField
                            label="Nome"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            style={{ marginBottom: '10px' }}
                        />
                        <TextField
                            label="Resposta"
                            variant="outlined"
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                            fullWidth
                            multiline
                            rows={2}
                            style={{ marginBottom: '10px' }}
                        />
                        <Button variant="contained" color="primary" type="submit" style={{ marginRight: '10px' }}>
                            Responder
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                    </form>
                </Box>
            </Modal>
            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity="error" sx={{ width: '100%' }}>
                    Comentário contém palavras proibidas. Por favor, revise seu comentário.
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Comunidade;