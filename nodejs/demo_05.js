let sum=function (a,b) {
    return(a+b)
}
let sumA=(a,b)=>{console.log("hello");
return(a+b)
}
console.log(sum(2,3))
console.log(sumA(2,3));
let pow=n=>n**2
let powN=function (n) {
    return n**2
}
console.log(pow(2));
console.log(powN(3));
let noArgs=()=>4**2
console.log(noArgs())
age=20
let wel=(age>18)?()=>{console.log(`age gr then 18`)}:()=>{console.log(`age less then 18`)}
wel()