import express from "express";
import morgan from "morgan";
import torrentsRoutes from "./routes/torrents.routes"




const app=express();

//Settings

app.set("port",4000)

//Middlewares
app.use(morgan("dev"));
app.use(express.json()); //Para poder procesar json proveniente del request body


//Routes
app.use("/api/torrents",torrentsRoutes);
export default app;