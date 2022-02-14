const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host:'119.74.42.128',
    password: '',
    database:'csad_proj'
});

app.post('/create', (req,res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const rating =req.body.rating;

    db.query('INSERT INTO feedback (name,email,subject,message,rating) VALUES(?,?,?,?,?)',
    [name,email,subject,message,rating],
     (err,result) => {
         if (err){
             console.log(err)
         }else{
             res.send("Values Inserted")
         }
     }
    );
});


app.listen(3001,()=>{
    console.log("YES PORT 3001");   
});