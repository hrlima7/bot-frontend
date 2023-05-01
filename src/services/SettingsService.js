 

import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export  async function  getSettings(){
    const settingsUrl =  `${API_URL}/settings`;
    console.log(loginUrl);
    const response = await axios.get(settingsUrl);
    return response.data;
    }
 


