const urlApi = "http://localhost:3500/";


const urlWebServices = {
    login:urlApi + "auth",
    recetas: urlApi + "recetas",
    recetasGet: urlApi + "recetasGet",
    register: urlApi + "register",
    uploadUserImg: urlApi + "userImg",
    uploadFileImg: urlApi + "recetaImg",
    resetPwd: urlApi + "resetPassword",
    sendMail: urlApi + "mailSend"
}

export default urlWebServices;