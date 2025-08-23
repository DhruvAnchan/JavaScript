let num = prompt("Enter looping number here");
for(let i =0;i<num;i++){
    console.log(i);
}
console.log("Waiting for clearance");
setTimeout(()=>{console.clear();
               },2000);
