import express from "express"
import { engine } from 'express-handlebars';

import firebaseConfig from "./src/services/firebase-config.js";

const handlebars = engine;

const app = express()

const portaRede = 8081; 
const pageExtensao = "handlebars" 

app.use(express.static('public'));

app.set("views", "/views")

app.engine(pageExtensao, handlebars({defaultLayout: "main"}))
app.set("view engine" , pageExtensao)

app.get("/", function(req, res) {
    res.render("task") 
})

app.listen(portaRede, function(){
    console.log("[express] WORKING http://localhost:" + portaRede);
})
