year = 1998
if(year%4===0){
    if(year%100===0 && year%400!==0){
        console.log("Not leap year.");
    }
    else{
        console.log("Leap year.");
    }
}
else{
    console.log("Not leap year.")
}