import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, List, ListItem, ListItemText, Modal, Box, Snackbar, Alert, IconButton, ListItemSecondaryAction } from '@mui/material';
import { database } from '../../firebase';
import { ref, push, onValue, set, get } from 'firebase/database';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import Cookies from 'js-cookie';
import ReplyIcon from '@mui/icons-material/Reply';

const Comunidade = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [reply, setReply] = useState('');
    const [replyTo, setReplyTo] = useState(null);
    const [open, setOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordModalOpen, setPasswordModalOpen] = useState(false);
    const [isNewUser, setIsNewUser] = useState(false);
    const [forbiddenWordsModalOpen, setForbiddenWordsModalOpen] = useState(false);

    const forbiddenWords = ['puta que pariu', 'porra', 'caralho', 'pqp', 'vtnc', 'cu', 'buceta', 'piru', 'meu pau', 'piroca', 'crl'];

    
    useEffect(() => {
        const commentsRef = ref(database, 'comments');
        onValue(commentsRef, (snapshot) => {
            const data = snapshot.val();
            const commentsList = data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : [];
            // Ordenar os comentários mais recentes primeiro
            commentsList.sort((a, b) => b.timestamp - a.timestamp);
            setComments(commentsList);
        });

        // Verificar se o usuário está logado
        const loggedInUser = Cookies.get('loggedInUser');
        if (loggedInUser) {
            const userData = JSON.parse(loggedInUser);
            setName(userData.name);
        }
    }, []);

    const containsForbiddenWords = (text) => {
        return forbiddenWords.some(word => text.toLowerCase().includes(word));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (containsForbiddenWords(comment)) {
            setForbiddenWordsModalOpen(true);
            return;
        }
        if (name && comment) {
            const loggedInUser = Cookies.get('loggedInUser');
            if (loggedInUser) {
                // Usuário já está logado, permitir comentário sem pedir senha
                const commentsRef = ref(database, 'comments');
                push(commentsRef, { name, comment, replies: [], timestamp: Date.now() });
                setComment('');
            } else {
                const usersRef = ref(database, `users/${name}`);
                const snapshot = await get(usersRef);
                if (snapshot.exists()) {
                    setPasswordModalOpen(true);
                    setIsNewUser(false);
                } else {
                    setPasswordModalOpen(true);
                    setIsNewUser(true);
                }
            }
        }
    };

    const handlePasswordSubmit = async () => {
        if (isNewUser) {
            const usersRef = ref(database, `users/${name}`);
            await set(usersRef, { password });
            const commentsRef = ref(database, 'comments');
            push(commentsRef, { name, comment, replies: [], timestamp: Date.now() });
            setName('');
            setComment('');
            // Salvar dados do usuário no cookie
            Cookies.set('loggedInUser', JSON.stringify({ name }), { expires: 7 });
        } else {
            const usersRef = ref(database, `users/${name}`);
            const snapshot = await get(usersRef);
            if (snapshot.exists() && snapshot.val().password === password) {
                const commentsRef = ref(database, 'comments');
                push(commentsRef, { name, comment, replies: [], timestamp: Date.now() });
                setName('');
                setComment('');
                // Salvar dados do usuário no cookie
                Cookies.set('loggedInUser', JSON.stringify({ name }), { expires: 7 });
            } else {
                setAlertOpen(true);
            }
        }
        setPassword('');
        setPasswordModalOpen(false);
    };

    const handleReplySubmit = (e) => {
        e.preventDefault();
        if (containsForbiddenWords(reply)) {
            setForbiddenWordsModalOpen(true);
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

    const handleForbiddenWordsModalClose = () => {
        setForbiddenWordsModalOpen(false);
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
            <Modal open={passwordModalOpen} onClose={() => setPasswordModalOpen(false)}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6" component="h2" style={{ marginBottom: '10px' }}>
                        {isNewUser ? 'Cadastrar Nome' : 'Nome já cadastrado, por favor insira a senha'}
                    </Typography>
                    <TextField
                        label="Senha"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        style={{ marginBottom: '10px' }}
                    />
                    <Button variant="contained" color="primary" onClick={handlePasswordSubmit} style={{ marginRight: '10px' }}>
                        {isNewUser ? 'Cadastrar' : 'Enviar'}
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => setPasswordModalOpen(false)}>
                        Cancelar
                    </Button>
                </Box>
            </Modal>
            <Modal open={forbiddenWordsModalOpen} onClose={handleForbiddenWordsModalClose}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6" component="h2" style={{ marginBottom: '10px' }}>
                        Comentário contém palavras proibidas. Por favor, revise seu comentário.
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleForbiddenWordsModalClose} style={{ marginRight: '10px' }}>
                        Reescrever
                    </Button>
                </Box>
            </Modal>
            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity="error" sx={{ width: '100%' }}>
                    Senha incorreta. Por favor, tente novamente.
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Comunidade;