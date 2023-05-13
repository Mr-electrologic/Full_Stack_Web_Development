var express=require('express')
var bp=require('body-parser')
var cors=require('cors')
var mong=require('mongodb').MongoClient
var app=express()
app.use(cors())
app.use(bp.json())
var url="mongodb://127.0.0.1:27017"
app.post("/insert",function(req,res){
    mong.connect(url,(err,db)=>{
        if(err) throw err
        var dbo=db.db('practice')
        var d={rollno:req.body.rollno,name:req.body.name,cl:req.body.cl}
        dbo.collection("students").insertOne(d,(err,res)=>{
            if(err) throw err
            console.log('document inserted')
            db.close()
        })
    })
})
app.post("/update",function(req,res){
    mong.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db('practice');
        var d = {rollno:req.body.rollno};
        var u = {$set:{rollno:req.body.rollno,name:req.body.name,cl:req.body.cl} };
        dbo.collection('students').updateMany(d, u, function(err, res) {
          if (err) throw err;
          console.log("document updated");
          db.close();
        })
      })
    })
app.post("/delete",function(req,res){
    mong.connect(url,function(err,db){
        if (err) throw err
        var dbo=db.db('practice')
        var d={rollno:req.body.rollno}
        dbo.collection('students').deleteMany(d,function(err,res){
            if (err) throw err
            console.log("document deleted");
            db.close();
        })
    })
})
app.get("/display",function(req,res){
    mong.connect(url,(err,db)=>{
        if(err) throw err
        var dbo=db.db('practice')
        dbo.collection("students").find({}).toArray((err,recs)=>{
            if(err) throw err
            res.send(recs)
        }
    )
})
})
app.listen(5000,()=>console.log("listening..."))