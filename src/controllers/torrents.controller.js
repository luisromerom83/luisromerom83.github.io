//Aquí irá todo el proceso para guardar el torrent localmente
import config from "../config";

//valor de folder traido desde archivo config y este a su vez de variables de entorno (.env)
const watchfolder=config.watchmovies;


const savetorrent=async (req,res)=>{
try{

    const {test}=req.body;
    res.json("Respondiendo desde controller Linux2 "+ req.body);
    console.log(req.body);
    console.log(test);
} catch (error) {
res.status (500);
res.send(error.message);

}
};
export const methods=
{
savetorrent
};



