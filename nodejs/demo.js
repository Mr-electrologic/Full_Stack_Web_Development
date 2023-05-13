const fir=[1,2,3,4,5]
const sec=[6,7,8,9,0]
comb=fir.concat(sec)
console.log(comb);

stu={rno:"s20121",name:"sai",mks:{cs:33,eng:87,phy:65}}
const {rno:r,name:n,mks:{cs,phy,eng,mat=33}}=stu
console.log(n);
console.log(phy);
console.log(eng);
console.log(mat);
console.log(cs);

class car{
    constructor(b,n){
        this.brand=b
        this.name=n
    }
    
}
class CarEngine extends car{
    constructor(b,n,e){
        super(b,n)
        this.engine=e
    }
    display(){
        console.log(`${this.brand} ${this.name} ${this.engine}`);
    }
}

let c1=new CarEngine('maruti','swift','1.3-DDIS')
c1.display()

var person={name:'Loki',rollno:'s20738'}
var address={state:'hollund',city:'poinguin'}
personadd={...person,hobbies:'football',...address}
console.log(personadd);

var intro=["hello","i","am","loki"]
var [a,,,d]=intro
console.log(a+d);