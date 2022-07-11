import React from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import urlWebServices from '../controllers/webServices'

export const AuthContext = createContext()


export default function AuthProvider({ children }) {

    const [user, setUser] = React.useState(!localStorage.getItem("user")? null : JSON.parse(localStorage.getItem("user")))
    let navigate = useNavigate(); 

    const login = async (mail, pwd) => {
        
    let url = urlWebServices.login;
    
    const formData = new URLSearchParams();
    formData.append('email', mail);
    formData.append('pwd', pwd);
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', 
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        }); 
        
        let rdo = response.status;
        console.log("response",response);
        if (rdo === 401){
            //error password
            
            return rdo;
        }

        let data = await response.json();
        console.log("jsonresponse",data);
        
            switch(rdo)
            {
                case 200:
                {
                    //guardo token
                    localStorage.setItem("x",data[0].accessToken);
                    localStorage.setItem("user",JSON.stringify(data[1].foundUser));
                    //guardo usuario logueado
                    setUser(data[1].foundUser)
                    console.log("El user es",user)
                    navigate("/home");
                    return ({rdo:0,mensaje:"Ok"});//correcto
                }
                case 202:
                {
                    //error mail
                    return ({rdo:1,mensaje:"El mail ingresado no existe en nuestra base."});
                }
                case 203:
                {
                    //error password
                    return ({rdo:1,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);   
    };

    console.log(user)


    }
    const logout = () => {
        
        localStorage.removeItem("user")
        localStorage.removeItem("x")
        setUser(null)

    }

    const isLogged = () => { 
        return !!user
    }

    const contextValue = { user,login, logout, isLogged }

    return (
    <AuthContext.Provider value={contextValue}>
        { children }
    </AuthContext.Provider>

    )
}
