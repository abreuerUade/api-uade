import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar'

export default function FullRecipie(props){

   // const user = props.user
    const receta = props.receta.item


    return (
        <>
        <Navbar text="FullRecipie"/>
        <Container>
            <h1> {receta.name} </h1>
        </Container>
        </>
        );
    }