students=[
    {rollno:"101",name:"saiprasad",mks:109},
    {rollno:"102",name:"ashley",mks:100},
    {rollno:"103",name:"sarah",mks:142},
    {rollno:"104",name:"shrutika",mks:108}

]
//map
stu=students.map(ele=>`$$$${ele.name}$$$`)
console.log(stu);

//filter
stufil=students.filter(ele=>ele.mks>105).map(ele=>ele.name)
console.log(stufil);

//reduce
tot=students.reduce((p,c)=>p+c.mks,0)
console.log(tot);