// const mysql = require("mysql");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const db = require("../routes/auth");
// const authController = require("../controllers/auth");


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

// const login = async(req , res) =>{

// };

// module.exports = login;
// module.exports =db;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../routes/auth");

const login = async(req , res) => {

    const { email, password } = req.body;
    if (!email || !password ) return res.json({status : "error" , error : "please enter your email and password"});
    else{
        db.query("SELECT * FROM users WHERE email = ?" , [email] , async(Err,result)=> {
            if(Err) throw Err;
            if(!result.length || !await bcrypt.compare(password, result[0].password)) return res.json({status : "error" , error : "Incorrect Email And Password"})
            else{
                const token = jwt.sign({ id: result[0].id } , process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES
                });
                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000), 
                    httpOnly: true
                }
                res.cookie("UserRegistered" , token, cookieOptions);
                return res.json({status : "success" , success : "User has been logged In"});
            }

        });

    }
}

module.exports = login;