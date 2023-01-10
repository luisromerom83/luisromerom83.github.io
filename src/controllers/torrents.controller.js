//Aquí irá todo el proceso para guardar el torrent localmente
import config from "../config";

//valor de folder traido desde archivo config y este a su vez de variables de entorno (.env)
const watchfolder=config.watchmovies;
const mensajeget=async (req,res)=>{
    try{
    
        res.json("Respondiendo para get"+ req.body);
        console.log("Mensaje get")      
    } catch (error) {
    res.status (500);
    res.send(error.message);
    
    }
    }

  

const savetorrent=async (req,res)=>{
try{
    const {test}=req.body;
//Testing run local CLI
const { spawn } = require('node:child_process');
const ls = spawn('curl', [test,'--output', config.watchmovies+'torrent.torrent']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

//End testing




    //const {test}=req.body;
    res.json("Respondiendo desde controller Linux2 "+ req.body);
    console.log(req.body);
    //console.log(test);
} catch (error) {
res.status (500);
res.send(error.message);

}
};
export const methods=
{
savetorrent,mensajeget,
};



