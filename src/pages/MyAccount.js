import React from 'react';
import Navbar from '../components/Navbar';
import ListBar from '../components/sidebar/Listbar';
import Footer from '../components/Footer';

export default function MyAccount(props){
    const userName = props.fullUser.firstName + props.fullUser.lastName
    const userPic = props.fullUser.profPic
    const currentUser = props.fullUser

    return (
        
        <>
            <Navbar text="Settings" userName={userName} pic={userPic} />
            <ListBar settingsOption={props.settingsOption} user={currentUser}></ListBar>
            <Footer />
        </>
        );
    }