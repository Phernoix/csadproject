const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require('bcrypt');
const { response } = require('express');
const saltRounds = 10;

app.use(cors({
    origin:["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    key:"userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    },
}))

app.use(express.json());
app.use(fileUpload());

const db = mysql.createConnection({
  user: "root",
  host: "119.74.42.128",
  password: "",
  database: "csad_proj",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  const rating = req.body.rating;

  db.query(
    "INSERT INTO feedback (name,email,subject,message,rating) VALUES(?,?,?,?,?)",
    [name, email, subject, message, rating],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;




    bcrypt.hash(password,saltRounds,(err, hash)=> {
        if(err){
            console.log(err);
        }
        db.query('INSERT INTO users (username,password) VALUES(?,?)',
        [username,hash],
         (err,result) => {
             if(err){
                res.send({message:"Username already exists"});
             }else{
                res.send({message:"Registered Successfully"});
        }
    }
        ); 
    })
   
});

app.post('/update', (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
    const mobileno = req.body.mobileno;

    db.query('SELECT * FROM users WHERE username = ?;',
    username,
     (err,result) => {
         if(err){
            res.send({err:err});
         }

        if(result.length > 0){
            bcrypt.compare(password, result[0].password, (error,response)=>{
                if(response){
                    req.session.user = result;
                    console.log(req.session.user);
                    //res.send(result)

                    db.query('UPDATE users SET mobileno = ? WHERE username = ?',
                    [mobileno,username],
                     (err,result) => {
                         if(err){
                            console.log(err);
                            res.send({message:"Invalid Input"});
                         }else{
                        res.send({message:"Profile Updated"});
                    }
                }
                    ); 

                }else{
                    res.send({message: "Wrong username/password combination!"})
                }
            });
        }else{
            res.send({message:"User doesn't exist"})
        }
    }
    );  
});

app.post('/deleted', (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
    const mobileno = req.body.mobileno;

    db.query('SELECT * FROM users WHERE username = ?;',
    username,
     (err,result) => {
         if(err){
            res.send({err:err});
         }

        if(result.length > 0){
            bcrypt.compare(password, result[0].password, (error,response)=>{
                if(response){
                    req.session.user = result;
                    console.log(req.session.user);
                    //res.send(result)

                    db.query('DELETE FROM users WHERE username = ?',
                    [username],
                     (err,result) => {
                         if(err){
                            console.log(err);
                            res.send({message:"Invalid Input"});
                         }else{
                        res.send({message:"Profile Deleted Successfully"});
                    }
                }
                    ); 

                }else{
                    res.send({message: "Wrong username/password combination!"});
                }
            });
        }else{
            res.send({message:"User doesn't exist"})
        }
    }
    );  
});

app.get("/login",(req,res)=> {
    if (req.session.user) {
        res.send({loggedIn:true, user: req.session.user})
    } else{
        res.send({loggedIn:false});
    }
})

app.post('/login', (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;

    db.query('SELECT * FROM users WHERE username = ?;',
    username,
     (err,result) => {
         if(err){
            res.send({err:err});
         }

        if(result.length > 0){
            bcrypt.compare(password, result[0].password, (error,response)=>{
                if(response){
                    req.session.user = result;
                    console.log(req.session.user);
                    res.send(result)
                }else{
                    res.send({message: "Wrong username/password combination!"})
                }
            });
        }else{
            res.send({message:"User doesn't exist"})
        }
    }
  );
});

app.post("/sendImage", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;
  //db.query(
  //  "INSERT INTO files (image) VALUES (?)",
  //  [file],
    file.mv(`/csadproject/client/public/uploads/${file.name}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({
        fileName: file.name,
        filePath: `./uploads/${file.name}`,
      });
    })
  //) 
});

app.listen(3001, () => {
  console.log("YES PORT 3001");
app.post('/log', (req,res) =>{
    const announcements = req.body.announcements;

    db.query('SELECT * FROM announcements WHERE id = 1',
    [announcements],
     (err,result) => {
         if (err){
             res.send({err: err})
         }
             
            if (result){
                 res.send(result)
             } else {
                 res.send({message: "No announcement found"})
             }
         }
    );
});
});


app.listen(3001,()=>{
    console.log("YES PORT 3001");   
});
