import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar.js'

export default function Dashboard(){


    return (
        <div>
        <Navbar />
        <Container>
            <h1>Este es el Dashboard</h1>
        </Container>

        </div>   
        );
    }