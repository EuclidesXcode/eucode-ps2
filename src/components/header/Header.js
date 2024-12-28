import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { database } from '../../firebase';
import { ref, get, increment, update } from 'firebase/database';

const Header = () => {
    const [visitors, setVisitors] = useState(0);

    useEffect(() => {
        const visitorsRef = ref(database, 'visitors/count');
        get(visitorsRef).then((snapshot) => {
            if (snapshot.exists()) {
                const currentVisitors = snapshot.val();
                setVisitors(currentVisitors);
                update(visitorsRef, { 'count': increment(1) });
            } else {
                setVisitors(1);
                update(visitorsRef, { 'count': 1 });
            }
        });
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