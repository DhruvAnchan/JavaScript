/* $(document).ready(function(){
    $("h1").css("color","purple");
})
$("button").click(function(){
    $("h1").css("color","red");
    setTimeout(function(){
        $("h1").css("color","purple");
    },1000);
}) */
var arr = "";
$("input").keypress(function(event){
    arr = arr+event.key;
    console.log(event.key);
    $("h1").text(arr);
})