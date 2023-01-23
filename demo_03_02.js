function computesimpleintrest(p,no,r) {
    console.log(p*no*r);
}
function getData(p,no,r,cx) {
    if (no>5) {
        cx(p,no,r)
    }
    else{
        console.log("no of years less");
    }
}
getData(1000,10,5,computesimpleintrest)
