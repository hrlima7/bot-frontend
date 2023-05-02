
 

import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export  async function  doLogin(email, password){
    const loginUrl =  `${API_URL}/login`;
    console.log(loginUrl);
    const response = await axios.post(loginUrl, {email,password});
    return response.data;
    }
 


export async function doLgout(){
    const logoutUrl = `${API_URL}/logout`;
    const response = await axios.post(logoutUrl);
    return response.data;
    }
 
    
