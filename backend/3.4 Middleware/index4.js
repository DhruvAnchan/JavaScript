import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandname = "";

app.use(bodyParser.urlencoded());

app.post("/submit",(req,res)=>{
  console.log(req.body);
  bandname = req.body["street"]+req.body["pet"];
  res.send("<h1>Your Band Name is: </h1><br><h2>"+bandname+"</h2>");
});

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
