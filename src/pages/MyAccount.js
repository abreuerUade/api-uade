import React from 'react';
import Navbar from '../components/Navbar';
import ListBar from '../components/sidebar/Listbar';
import Footer from '../components/Footer';


export default function MyAccount(props){

    
    

    return (
        
        <>
            <Navbar />
            <ListBar settingsOption={props.settingsOption} ></ListBar>
            <Footer />
        </>
        );
    }