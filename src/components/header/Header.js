import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { database } from '../../firebase';
import { ref, get, update, increment } from 'firebase/database';
import axios from 'axios';
import Cookies from 'js-cookie';

const Header = () => {
    const [visitors, setVisitors] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const fetchVisitorData = async () => {
            try {
                const ipResponse = await axios.get('https://api.ipify.org?format=json');
                const userIp = ipResponse.data.ip;
                const userAgent = navigator.userAgent;
                const sanitizedUserIp = userIp.replace(/[.#$/[\]]/g, '_');
                const sanitizedUserAgent = userAgent.replace(/[.#$/[\]]/g, '_');
                const visitorsRef = ref(database, 'visitors');
                const visitorKey = `${sanitizedUserIp}_${sanitizedUserAgent}`;
                const snapshot = await get(visitorsRef);
                if (snapshot.exists()) {
                    const visitorsData = snapshot.val();

                    if (visitorsData[visitorKey]) {
                        setVisitors(visitorsData.count);
                    } else {
                        setVisitors(visitorsData.count + 1);
                        update(visitorsRef, {
                            count: increment(1),
                            [visitorKey]: true
                        });
                    }
                } else {
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

        const loggedInUser = Cookies.get('loggedInUser');
        if (loggedInUser) {
            const userData = JSON.parse(loggedInUser);
            setLoggedInUser(userData.name);
        }
    }, []);

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = (
        <List>
            <ListItem button component={Link} to="/isos">
                <ListItemText primary="ISOs" />
            </ListItem>
            <ListItem button component={Link} to="/emulator">
                <ListItemText primary="Emulador" />
            </ListItem>
            <ListItem button component={Link} to="/community">
                <ListItemText primary="Comunidade" />
            </ListItem>
            <ListItem button component={Link} to="/sobre">
                <ListItemText primary="Sobre" />
            </ListItem>
            <ListItem button component={Link} to="/donate">
                <ListItemText primary="Donate" />
            </ListItem>
        </List>
    );

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Eucode | Play 2
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            {menuItems}

                            <Typography variant="body1" component="div" sx={{ flexGrow: 2, marginLeft: 1 }}>
                                Visitantes: {visitors}
                            </Typography>

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <PersonIcon />
                                <Typography variant="body1" component="div" sx={{  color: 'black' }}>
                                    {loggedInUser}
                                </Typography>
                            </div>
                        </Drawer>
                    </>
                ) : (
                    <>
                        <Button color="inherit" component={Link} to="/isos">ISOs</Button>
                        <Button color="inherit" component={Link} to="/emulator">Emulador</Button>
                        <Button color="inherit" component={Link} to="/community">Comunidade</Button>
                        <Button color="inherit" component={Link} to="/sobre">Sobre</Button>
                        <Button color="inherit" component={Link} to="/donate">Doação</Button>
                    </>
                )}

                {!isMobile && (
                    <Typography variant="body1" component="div" sx={{ flexGrow: 1, marginLeft: 1 }}>
                        Visitantes: {visitors}
                    </Typography>)}
                {(loggedInUser && !isMobile) && (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <PersonIcon />
                        <Typography variant="body1" component="div" sx={{ marginLeft: 1 }}>
                            {loggedInUser}
                        </Typography>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;