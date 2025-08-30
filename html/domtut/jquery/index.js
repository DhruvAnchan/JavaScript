/* $(document).ready(function(){
    $("h1").css("color","purple");
})
$("button").click(function(){
    $("h1").css("color","red");
    setTimeout(function(){
        $("h1").css("color","purple");
    },1000);
}) */
//var arr = "";
$("h1").on("mouseover",function(event){
    //arr = arr+event.key;
    //console.log(event.key);
    $("h1").slideUp();
})

$("button").on("click",function(event){
    $("h1").slideToggle();
})