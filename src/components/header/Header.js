import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { database } from '../../firebase';
import { ref, get, update, increment } from 'firebase/database';
import axios from 'axios';

const Header = () => {
    const [visitors, setVisitors] = useState(0);

    useEffect(() => {
        const fetchVisitorData = async () => {
            try {
                // Obter o endereço IP do usuário
                const ipResponse = await axios.get('https://api.ipify.org?format=json');
                const userIp = ipResponse.data.ip;

                // Obter informações do dispositivo
                const userAgent = navigator.userAgent;

                // Substituir caracteres inválidos
                const sanitizedUserIp = userIp.replace(/[.#$/[\]]/g, '_');
                const sanitizedUserAgent = userAgent.replace(/[.#$/[\]]/g, '_');

                // Referência ao banco de dados
                const visitorsRef = ref(database, 'visitors');
                const visitorKey = `${sanitizedUserIp}_${sanitizedUserAgent}`;

                // Verificar se o visitante já existe no banco de dados
                const snapshot = await get(visitorsRef);
                if (snapshot.exists()) {
                    const visitorsData = snapshot.val();

                    if (visitorsData[visitorKey]) {
                        // Visitante já existe, apenas atualizar a contagem de visitantes
                        setVisitors(visitorsData.count);
                    } else {
                        // Novo visitante, incrementar a contagem e adicionar o visitante
                        setVisitors(visitorsData.count + 1);
                        update(visitorsRef, {
                            count: increment(1),
                            [visitorKey]: true
                        });
                    }
                } else {
                    // Primeiro visitante
                    setVisitors(1);
                    update(visitorsRef, {
                        count: 1,
                        [visitorKey]: true
                    });
                }
            } catch (error) {
                console.error("Error fetching visitor data: ", error);
            }
        };

        fetchVisitorData();
    }, []);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Eucode PS2 ISOs
                </Typography>
                <Button color="inherit" component={Link} to="/isos">ISOs</Button>
                <Button color="inherit" component={Link} to="/emulator">Emulador</Button>
                <Button color="inherit" component={Link} to="/comunidade">Comunidade</Button>
                <Button color="inherit" component={Link} to="/sobre">Sobre</Button>
                <Button color="inherit" component={Link} to="/donate">Donate</Button>
                <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                    Visitantes: {visitors}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;