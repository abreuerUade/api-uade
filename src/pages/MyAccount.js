import React from 'react';
import Navbar from '../components/Navbar';
import ListBar3 from '../components/sidebar/Listbar3';

export default function MyAccount(props){
    const userName = props.fullUser.firstName + props.fullUser.lastName
    const userPic = props.fullUser.profPic

    const currentUser = props.fullUser

    return (
        
        <>
            <Navbar text="Settings" userName={userName} pic={userPic} />
            <ListBar3 user={currentUser}></ListBar3>


        </  >
        );
    }