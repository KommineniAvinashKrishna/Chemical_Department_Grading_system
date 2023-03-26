const express=require("express");
const app=express();
const bodyParser = require("body-parser");
const cors= require("cors");
const mysql=require("mysql");

const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "cdgs"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post("/login",(req,res)=>{
   const sql ="Select * from user where username= ? and pasword = ?" ;
   db.query(sql,[req.body.username,req.body.password],(err,data)=>{
    if(err) return res.json("error");
    if(data.length >0 )
    return res.json("Login Succesful")
    else
    return res.json("NO Record");
   }) 
     
});

app.post("/cotable",(req,res)=>{
    console.log(req.body)
   // const count=req.body.tableData.length;
   // console.log(count)
    const tableData=req.body.tableData;
    console.log(`INSERT INTO 'co_table' (courseid,co_id,co_type) VALUES ('${req.body.courseid}','${tableData[0].co_id}','${tableData[0].co_type}')`)
    const sql=`INSERT INTO co_table (courseid,co_id,co_type) VALUES ('${req.body.courseid}','${tableData[0].co_id}','${tableData[0].co_type}')`;
     db.query(sql,(err,data)=>{
        if(err) return res.json("error");     
        return res.json("data enter succesfuly");
    })
})

app.post("/registercourse",(req,res)=>{
    const sql ="INSERT INTO `course` (courseid, co_count, student_count) VALUES (?,?,?);" ;

    db.query(sql,[req.body.courseid,req.body.co_count,req.body.student_count],(err,data)=>{
     if(err) return res.json("error");
        return res.json("data entered succesfully");
    })   
 });

app.post("/student_table",(req,res)=>{
    //const data=req.body.tableData;    
    const sql="INSERT INTO student_table (courseid,student_id,student_name) VALUES (? ? ?)";
    db.query(sql,[req.body.courseid,data],(err,data)=>{
        if(err) return res.json("error");
    })
});


app.listen(4000,()=>{
    console.log("server is running on port 5000");
})

