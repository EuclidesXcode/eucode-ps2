import React from 'react';
import { Link, Typography } from '@mui/material';

const Emulator = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Emulador</h1>
            <p>Ainda não tem o emulador do PS2?</p>
            <Typography variant="body1">
                <Link href="https://drive.google.com/file/d/1dFcvk5Fgjd9eZ8ARem-P81-ytsbmn8-J/view?usp=share_link" target="_blank" rel="noopener noreferrer">
                    Baixe aqui de graça
                </Link>
            </Typography>
            <p>Baixe aqui também a BIOS do emulador:</p>
            <Typography variant="body1">
                <Link href="https://drive.google.com/file/d/1M13sCEf7lX-fxksbqGipofRXn8Y7ElEm/view?usp=share_link" target="_blank" rel="noopener noreferrer">
                    Baixe a BIOS aqui
                </Link>
            </Typography>
        </div>
    );
};

export default Emulator;