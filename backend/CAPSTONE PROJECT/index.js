import express from "express";

const port = 3000;
const app = express();

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.post("/post",(req,res)=>{
    res.render("post.ejs",{post: res.body});
});

app.delete("/delete",(req,res)=>{
    res.render("delete.ejs",{del: res.body});
});

app.put("/update",(req,res)=>{
    res.render("update.ejs",{update: res.body});
});

app.listen(port,()=>{
    console.log(`server open on port: ${port}`);
});

