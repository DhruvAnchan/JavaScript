var A = [1,2,3];
var B = [9,7,6];

var temp = A[0];
B.push(temp);
A.shift();
merged = A.concat(B);
array_.sort(function(a,b){return a-b});
console.log(merged);
console.log(merged[0]);
for(let i = 0; i<merged.length; i++){
    console.log(merged[i]);
}