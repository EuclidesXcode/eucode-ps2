import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import QRcode from '../../assets/qr-code.jpeg';

const Donate = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Donate</h1>
            <p>Ajude a manter o site com sua doação.</p>
            <p>pode enviar na chave PIX: euclides.silva@accurate.com.br</p>
            <p>ou no QR Code abaixo:</p>
            <Card style={{ maxWidth: 345, margin: '20px auto' }}>
                <CardMedia
                    component="img"
                    alt="QR Code"
                    height="300"
                    image={QRcode} // Substitua pelo caminho da sua imagem de QR code
                    title="QR Code"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Escaneie o QR Code com seu aplicativo de banco para fazer a doação.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Donate;