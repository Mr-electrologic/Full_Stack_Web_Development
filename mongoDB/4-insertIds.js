var mong=require('mongodb').MongoClient
var url="mongodb://127.0.0.1:27017"
mong.connect(url,function(err,db){
    if(err)throw err
    var dbo=db.db('student123')
    var data=[{rollno:"123",name:"Allan",age:"21"},
    {_id:101,rollno:"234",name:"Andre",age:"22"},
    {_id:102,rollno:"345",name:"Ashley",age:"23"},
    {_id:103,rollno:"123",name:"Alim",age:"20"}
    ];
    dbo.collection("students").insertMany(data,function(err,res){
        if(err) throw err
        console.log(res.insertCount)
        db.close()
    })

})
