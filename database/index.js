const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");
const fileUpload = require('express-fileupload');

app.use(cors());
app.use(express.json());
app.use(fileUpload());

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

app.post('/register', (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;

    db.query('INSERT INTO users (username,password) VALUES(?,?)',
    [username,password],
     (err,result) => {
         if(err){
            console.log(err)
         }else{
        res.send("Values Inserted")
    }
}
    );    
});

app.post('/login', (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;

    db.query('SELECT * FROM users WHERE username = ? AND password = ?',
    [username,password],
     (err,result) => {
         if(err){
            res.send({err:err});
         }

        if(result.length > 0){
            res.send(result)
        }else{
            res.send({message:"Wrong username/password combination"})
        }
    }
    );    
});

app.post('/sendImage', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const file = req.files.file;
  
    file.mv(`${__dirname}/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
  
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });
  


app.listen(3001,()=>{
    console.log("YES PORT 3001");   
});