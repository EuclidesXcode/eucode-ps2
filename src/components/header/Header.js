import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
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
            </Toolbar>
        </AppBar>
    );
};

export default Header;