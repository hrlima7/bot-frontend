import  React, {useState, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import { getSettings } from '../../services/SettingsService';




function Settings(){

    const navigate = useNavigate()
    const [error, setError] = useState("");
    const [settings, setSettings] =  useState({ 
        email: "",
        apiUrl:"",
        accessKey: "",
        keySecret: ""
    
    });

    useEffect( () =>    {
        const token = localStorage.getItem("token");

        getSettings(token)
        .then (response =>{
                setSettings(response);

        })
        .catch( err => {
            if(err.response.status === 401){
                return navigate("/")
            }
            setError(err.response.data)

                
        })

    },[])



        return <div>
            <h1> Pagina principal de Henrique</h1>
            {settings.email}

            {
                error 
                ? <div className="alert alert-danger" >{error}</div>
                : <React.Fragment></React.Fragment>

            }
        </div>
        
}


export default Settings;