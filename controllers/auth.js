// const mysql = require("mysql");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");


// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "cv4fun"
//     // host: process.env.DATABASE_HOST,
//     // user: process.env.DATABASE_USER,
//     // password: process.env.DATABASE_PASSWORD,
//     // database: process.env.DATABASE

// });

// const { request } = require("express");

// exports.signup = function(req,res){
//     console.log(req.body);

//     // can written like this
//     // const name = req.body.name;
//     // const email = req.body.email;
//     // const password= req.body.password;
//     // const passwordconfirm = req.body.passwordconfirm;

//     const { name, email, password, passwordconfirm } = req.body;

//     // ? is for security
//     db.query("SELECT email FROM users where email = ? " , [email] , async(error , results) => {

//         if(error){
//             console.log(error);
//         }
//         if(results.length > 0){
//             return res.render("signup" , {
//                 message : "The Email is already in use"
//             });
//         }
//         else if(password !== passwordconfirm) {
//             return res.render("signup" , {
//                 message : "Password do not match"
//             });
//         }

//         let hashedPassword = await bcrypt.hash(password, 8);
//         console.log(hashedPassword);

//         db.query("INSERT INTO users SET ? ", { name: name, email:email, password:hashedPassword }, function(error , results){

//             if(error){
//                 console.log(error);
//             }
//             else{
//                 console.log(results);
//                 return res.render("signup",{
//                     message: "User Registered"
                    
//                 });
//             }
//         });

//     });

    
// }


const express = require("express");
const signup = require("./signup");
const login = require("./login");


const router = express.Router();

router.post("/signup" , signup);
router.post("/login" , login);


module.exports = router;