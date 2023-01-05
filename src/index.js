import app from "./app";
import https from "https"
import express from "express"
import fs from "fs"



const main=()=>
{

    const options={
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem'),
         
        }


/*
app.listen(app.get("port"));

console.log(`Server on port ${app.get("port")}`)
*/
https.createServer(options, app).listen(app.get("port"), console.log(`server runs on port ${app.get("port")}`))

};

main();

