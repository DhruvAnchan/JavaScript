const fs = require("fs");

fs.writeFile("message.txt","Hello no from Node.js", (err) => {
    if (err) throw err;
    console.log("File contents added");
    
});
fs.readFile("message.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});