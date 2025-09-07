var origArray = [1,2,3,4,5,6,7];
var newArr = [];
for(let i = 0; i<origArray.length; i++){
    newArr[i] = origArray[i]+i;
}
 
console.log("newArr:"+newArr);
var temp = newArr.pop(0);
console.log("temp:"+temp); 
newArr.shift();
console.log("shifted:"+newArr);
newArr.pop()
console.log("popped:"+newArr);
merged = origArray.concat(newArr);
console.log("merged:"+merged);

