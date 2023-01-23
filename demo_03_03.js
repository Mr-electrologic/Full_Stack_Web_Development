
function logStuff(name,addr) {
    console.log(name);
    for(x in addr)
    console.log(addr[x]);
}
function getData(n,address,cb) {
    if(typeof(address)==="object")
    cb(n,address)
    else
    console.log(address)
}
getData("Rutvek",{street:"kalay",state:"goa",country:"india"},logStuff)
getData("Rutvek","kalay-goa",logStuff)