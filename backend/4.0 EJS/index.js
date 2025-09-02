import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const today = new Date("2022-03-26");
    let day = today.getDay();

    let type = "a Weekday";
    let adv = "it's time to work hard";

    if(day === 0|| day === 6){
        type = "the Weekend";
        adv = "it's time to have fun";
    }

    res.render("index.ejs",{
        dayType: type,
        advice: adv,
    })
});

app.listen(port, ()=>{
    console.log(`Server initialized at ${port}`);
})