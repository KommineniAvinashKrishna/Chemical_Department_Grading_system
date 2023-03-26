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
    const count=req.body.tableData.length;
    console.log(count)
    const tableData=req.body.tableData;
    console.log(`INSERT INTO 'co_table' (courseid,co_id,co_type) VALUES ('?,?,?)`)

    const sql=`INSERT INTO co_table (courseid,co_id,co_type) VALUES (?,?,?)`;
    tableData.forEach(item => {
        db.query(sql, [item.courseid, item.co_id,item.co_type], (err, result) => {
          if (err) throw err;
          console.log(`${item.co_id} inserted successfully`);
        });
      });
    
})

app.post("/registercourse",(req,res)=>{
    const sql ="INSERT INTO `course` (courseid, co_count, student_count) VALUES (?,?,?);" ;
    db.query(sql,[req.body.courseid,req.body.co_count,req.body.student_count],(err,data)=>{
     if(err) return res.json("error");
        return res.json("data entered succesfully");
    })   
 });

app.post("/student_table",(req,res)=>{
    const tableData=req.body.tableData1;
    console.log(`INSERT INTO 'co_table' (courseid,student_id,student_name) VALUES (?,?,?)`)

    const sql=`INSERT INTO student_table (courseid,student_id,student_name) VALUES (?,?,?)`;
    
    tableData.forEach(item => {
        db.query(sql, [item.courseid, item.student_id,item.student_name], (err, result) => {
          if (err) throw err;
          console.log(`${item.student_id} inserted successfully`);
        });
      });
    
  

});


app.listen(4000,()=>{
    console.log("server is running on port 4000");
})

