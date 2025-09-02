//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const password = "DhruvAnchan2056";
var userAuth = false;

app.use(express.urlencoded({extended:true}));

function passCheck(req, res, next){
    if(req.body["password"] === password){
        userAuth = true;
    }
    else{
        userAuth = false;
    }
    next();
}

app.use(passCheck);

app.post("/check", (req, res)=>{
    if(userAuth){
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        res.redirect("/");
    }
});

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.listen(port, ()=>{
    console.log(`App functional at port ${port}`);
});