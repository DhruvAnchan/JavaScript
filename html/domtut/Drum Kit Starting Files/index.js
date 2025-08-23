var num = document.querySelectorAll(".drum").length;
const sounds = [
  new Audio("sounds/tom-1.mp3"),
  new Audio("sounds/tom-2.mp3"),
  new Audio("sounds/tom-3.mp3"),
  new Audio("sounds/tom-4.mp3"),
  new Audio("sounds/crash.mp3"),
  new Audio("sounds/kick-bass.mp3"),
  new Audio("sounds/snare.mp3")
];

/* for(let i = 0; i<num; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        sounds[i].play();
    });
} */
document.addEventListener("keydown",function(event){
    makeSound(event.key);
})
function makeSound(key){
    switch(key){
        case "w":
            sounds[0].play();
            break;
        case "a":
            sounds[1].play();
            break;
        case "s":
            sounds[2].play();
            break;
        case "d":
            sounds[3].play();
            break;
        case "j":
            sounds[4].play();
            break;
        case "k":
            sounds[5].play();
            break;
        case "l":
            sounds[6].play();
            break;
        default:
            console.log("wrong key "+event.key+" was pressed");
            console.log(typeof(event.key)+":"+event.key);
            break;
    }
}
