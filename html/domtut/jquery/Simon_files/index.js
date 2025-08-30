var count = 1;
var buttonColors = ["green","red","yellow","blue"];
var gamePattern = [];

function nextSequence(n){
    var arr = [];
    var num = 0;
    for(let i =0;i<n;i++){
        num = Math.floor(Math.random()*4);
        arr.push(buttonColors[num]);
    }
    gamePattern = arr;
}

function changeColor(gamePattern){
    var val = "";
    for(let i =0;i<gamePattern.length;i++){
        val = gamePattern[i];
        $(val).css(".pressed");
    }
}

$("h1").on("click",function(){
    nextSequence(count++);
    console.log(gamePattern);
    
});
