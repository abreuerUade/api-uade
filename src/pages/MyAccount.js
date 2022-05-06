import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import ListBar3 from '../components/sidebar/Listbar3';

export default function MyAccount(props){
    const userName = props.userName
    const userPic = props.pic
    const settingsOptions = [
        {title: "Mi info", subTitle: "ASDAS", onPress: () => {}},
        {title: "Mi info1", subTitle: "ASDAS1", onPress: () => {}},
        {title: "Mi info2", subTitle: "ASDAS2", onPress: () => {}},
        {title: "Mi info3", subTitle: "ASDAS3", onPress: () => {}},
        {title: "Mi info4", subTitle: "ASDAS4", onPress: () => {}},
        {title: "Mi info5", subTitle: "ASDAS5", onPress: () => {}},
        {title: "Mi info6", subTitle: "ASDAS6", onPress: () => {}},
    ]

    return (
        
        <div>
            <Navbar text="Settings" userName={userName} pic={userPic} />
            <ListBar3></ListBar3>

            <Container>           

            </Container>
            
            

        </div>
        );
    }