import { Divider, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ mt: 2, textAlign: "center" }}>
            <Divider />
            <Typography
                component="h6"
            >
                Copyright &copy; 2021. Developed By
                <Link href="https://github.com/wdmahbubur/" underline="none"> Mahbubur Rahman</Link>
            </Typography>
        </Box>
    );
};

export default Footer;