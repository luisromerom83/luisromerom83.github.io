import express from "express";
import morgan from "morgan";
import torrentsRoutes from "./routes/torrents.routes"
import homeRoutes from "./routes/home.routes"
import functionsRoutes from "./routes/functions.routes"




const app=express();
const cors = require('cors');
app.use(cors({
    origin: '*'
}));


//Settings

app.set("port",4000)

//Middlewares
app.use(morgan("dev"));
app.use(express.json()); //Para poder procesar json proveniente del request body
app.use(express.static('public'))
app.use(express.urlencoded({extended:true,limit:'3mb'}))

//Routes
app.use("/api/torrents",torrentsRoutes);
app.use("/",homeRoutes);
app.use("/src/funciones.js",functionsRoutes);
export default app;



