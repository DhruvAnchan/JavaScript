const butt = document.getElementById("butt");
const text = document.getElementById("text");
const change = document.querySelector(".highlight h1");
const highlightDiv = document.querySelector(".highlight");

console.log("button: "+butt+" text: "+text+ " change: "+change);
function fibonacci(n){
    if(isNaN(n)){
        alert("Not a number");
        return null;
    }
    fib = [0];
    if(n===1){
        return fib;
    }
    fib.push(1);
    if(n===2){
        return fib;
    }
    for(let i = 2; i < n ; i++ ){
        fib.push(fib[i-1]+fib[i-2]);
    }
    return fib;
}

function handleclick(){
    const enteredText = text.value;
    var disp = fibonacci(enteredText);
    if(disp!==null){
        change.textContent = "The Answer is: " + disp.join(", ");
        highlightDiv.style.display = 'block';
    }
    else {
        highlightDiv.style.display = 'none'; // Keep the panel hidden if there's an error
    }
}

butt.addEventListener('click',handleclick);
