//using for loop
cars=['alto','celerio','wagonr','swift']
carsdec=[]
for(i=0;i<cars.length;i++){
    carsdec.push(`***${cars[i]}***`)
}
for(c of carsdec)
console.log(c);

//using foreach
carsdec2=[]
cars.forEach(function(item){carsdec2.push(`####${item}####`)})
for(c of carsdec2)
console.log(c)

//using map without arrow callback
carsmap=cars.map(function(elem){
    return(`@@@${elem}@@@`)
})
for(c of carsmap)
console.log(c)

//using map with arrow callback
carsmap2=cars.map((ele)=>`%%%${ele}%%%`)
for(d of carsmap2)
console.log(d)

//filter fn
carsfilter=cars.filter(function(ele){
    return(ele.length>5)
})
for(c of carsfilter)
console.log(c)