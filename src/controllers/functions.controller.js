//Aquí irá todo el proceso para guardar el torrent localmente
import path from "path";
import config from "../config";

//valor de folder traido desde archivo config y este a su vez de variables de entorno (.env)
const watchfolder=config.watchmovies;


    const functionsroute=async (req,res)=>{
        try{
        
            
            console.dir("Regresando js file ");
            res.sendFile("/home/jromero/git/luisromerom83.github.io/"+req.baseUrl);
            
        } catch (error) {
        res.status (500);
        res.send(error.message);
        
        }
        }


export const methods=
{
functionsroute
};



