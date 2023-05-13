var mong=require('mongodb').MongoClient
var url="mongodb://127.0.0.1:27017"
mong.connect(url,function(err,db){
    if(err)throw err
    var dbo=db.db('student123')
    var data={rollno:"123",name:"Allan",age:"21"}
    dbo.collection("students").insertOne(data,function(err,res){
        if(err) throw err
        console.log(res.insertId)
        db.close()
    })

})
