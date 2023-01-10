import {config} from "dotenv";

config();

export default{
watchmovies: process.env.WATCHMOVIES || "",
watchtvshows: process.env.WATCHSHOWS || "",
homedir: process.env.HOME|| ""


};