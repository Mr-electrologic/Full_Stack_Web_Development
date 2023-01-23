function cb(y)
{
    console.log(100+y);
}
function startfun(x,callfun) {
    if (x>20) {
        callfun(x)
    }
}
startfun(30,cb)
//
