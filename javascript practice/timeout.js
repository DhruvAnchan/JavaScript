var rand;
for(let i =0;i<10;i++){
    rand = Math.floor(Math.random()*20);
    console.log(rand);
}
console.log("Waiting to Clear");
setTimeout(()=>{
    console.clear()
}, 20000);