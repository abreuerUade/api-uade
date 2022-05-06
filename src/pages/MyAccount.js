import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import ListBar3 from '../components/sidebar/Listbar3';

export default function MyAccount(props){
    const userName = props.userName
    const userPic = props.pic

    console.log(props.currentUser)
    
    return (
        
        <>
            <Navbar text="Settings" userName={userName} pic={userPic} />
            <ListBar3></ListBar3>

            <Container>           

            </Container>
            
            

        </  >
        );
    }