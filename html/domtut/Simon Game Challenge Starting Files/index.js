
var buttonColours = ["red", "blue", "green", "yellow"]; //stores the preset button names
var gamePattern = [];                                   //stores the patterns 
var userClickedPattern = [];                            //stores the user pressed buttons
var level = 0;

//addding a level updater/listener
$(document).on("keypress",function(){
    $("h1").text("Level: "+level);
    nextSequence();
    console.log(level+":"+gamePattern);
})

//attaching liseners to the buttons
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log("User update: "+userClickedPattern);
    animatePress(userChosenColour);
    playSound(userChosenColour);          //PLAYSOUND() called
    if(!checkAnswer()){

        $("body").addClass("game-over");

        setTimeout(function(){$("body").removeClass("game-over");},200);

        $("h1").html("Game Over, Press Any Key to Restart");

        startOver();
    }
    else{
        if(userClickedPattern.length===gamePattern.length){
            $("h1").html("Correct Answer<br>Press any key to move to next level")
            userClickedPattern = [];
        }
    }
});

//randomized sequence generator
function nextSequence() {
    $("h1").text("Level: "+level);
    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour); 
    //game generated sequence animation
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);        //PLAYSOUND() called
}

// plays sound when called
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}

function checkAnswer(){
    var len = userClickedPattern.length;
    if(userClickedPattern[len-1] === gamePattern[len-1]){
        console.log(userClickedPattern[len]+"||"+gamePattern[len]);
        return true;
    }
    else{
        return false;
    }
}

function startOver(){
    level = 0;
    userClickedPattern = [];
    gamePattern = [];
}