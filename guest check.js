guestList = ["Dhruv", "Xiangqui", "Jane", "Devesh"];
name = prompt("Enter your name please");
if(guestList.includes(name)){
    window.alert("Welcome back "+name);
}
else{
    window.alert("User not found");
}