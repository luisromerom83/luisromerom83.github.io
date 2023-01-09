//Aquí irá todo el proceso para guardar el torrent localmente
import config from "../config";

//valor de folder traido desde archivo config y este a su vez de variables de entorno (.env)
const watchfolder=config.watchmovies;


    const homeroute=async (req,res)=>{
        try{
        
            res.sendFile("/home/jromero/git/luisromerom83.github.io/index.html");
            console.log("Home Abierto: "+__dirname)      
            console.log("Process "+process.cwd)   
        } catch (error) {
        res.status (500);
        res.send(error.message);
        
        }
        }


export const methods=
{
homeroute
};



