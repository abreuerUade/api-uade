const urlApi = "http://localhost:3500/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"auth",
    recetas: urlApi + "recetas",
    signUpL: urlApi + "register",
    // uploadFileImg: urlApi + "utils/uploadImg",
    // guardarImgUser: urlApi + "api/users/guardarImgUser",
    // getImgUser: urlApi + "api/users/imgUserByMail",
    // uploadFileImg: urlApi + "api/users/uploadImg",
}

export default urlWebServices;