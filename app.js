// // for express
// const express = require("express");
// const app = express();

// // for cookies
// const cookie = require("cookie-parser");
// app.use(cookie());

// // path is for html file path
// const path = require("path");
// const mysql = require("mysql");

// // for databse credentials
// const dotenv = require("dotenv");


// // line from 13 to 24 is for database credentials
// dotenv.config({ path: '/.env' });
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

// //  for html files
// const publicDirectory = path.join(__dirname, './public');
// app.use(express.static(publicDirectory));

// // parse url encoded bodies as sent by html forms
// app.use(express.urlencoded({ extended: false}));

// // parse json bodies as sent by api clients
// app.use(express.json());




// //  for database connection
// db.connect(function(error){
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("MYSQL Connected...")
//     }
// });


// // Define routes
// app.use("/" , require("./routes/pages"));
// app.use("/auth" , require("./routes/auth"));
// app.use("/api", require("./controllers/auth"));


// app.listen(5000, function(){
//     console.log("server started on port 5000")
// });



// for express
const express = require("express");
const app = express();

const dotenv = require("dotenv").config();

// for db auth
const db = require("./routes/auth");

// for cookies
const cookie = require("cookie-parser");
app.use(cookie());

app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));

// for ejs templates
app.set("view engine", "ejs");
app.set("views" , "./views");

// for hbs templates
// app.set("view engine", "hbs");

// //  for html files
// const path = require("path");
// const publicDirectory = path.join(__dirname, './public');
// app.use(express.static(publicDirectory));

// parse json bodies as sent by api clients
app.use(express.json());

//  for database connection
db.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("MYSQL Connected...")
    }
});

// Define routes
app.use("/" , require("./routes/pages"));
app.use("/api", require("./controllers/auth"));

app.listen(5000, function(){
    console.log("server started on port 5000")
});


