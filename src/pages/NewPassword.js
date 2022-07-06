import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import urlWebServices from '../controllers/webServices'



export default function NewPassword () {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    
    const handlePass = (e) => {
        setPass(e.target.value)
    }
    
    const handleConfirmPass = (e) => {
        setConfirmPass(e.target.value)
    }
    const resetPwd = async () => {
        
        let url = urlWebServices.resetPwd;

        const formData = new URLSearchParams()
        formData.append('email', email)
        formData.append('pwd', pass)


        let rta = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,

        }).then(res => res.json())
        
    }
    

    return (
        <>
        </>
    )
}
