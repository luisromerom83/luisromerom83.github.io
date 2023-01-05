import {config} from "dotenv";

config();

export default{
watchmovies: process.env.watchmovies || "",
watchtvshows: process.env.watchtvshows || ""


};