var mong=require('mongodb').MongoClient
var url="mongodb://127.0.0.1:27017"
mong.connect(url,function(err,db){
    if(err)throw err
    var dbo=db.db('student123')
    dbo.collection("students").find({},{projection:{_id:0,age:1,rollno:1}}).toArray(function(err,res){
        if(err) throw err
        console.log(res)
        db.close()
    })

})