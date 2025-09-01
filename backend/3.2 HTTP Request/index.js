import express from 'express';
const app = express();
const port = 3000;


app.get("/",(req,res)=>{
    res.send("<h3>Home Page at: "+port+"</h3>");
    console.log(req.rawHeaders);
})

app.get("/about",(req,res)=>{
    res.send("<h3>B2B Sales Manager</h3>");
    console.log(req.rawHeaders);
})

app.get("/contact",(req,res)=>{
    res.send("<h3>+91 91487 39980</h3>");
    console.log(req.rawHeaders);
})

app.listen(port,()=>{
    console.log(`Starting up the server ${port}`);
});
