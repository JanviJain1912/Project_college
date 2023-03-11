const express =  require("express");
const loggedIn = require("../controllers/loggedin");
const router = express.Router();

router.get("/",(req,res) => {
    res.render("index");
});

router.get("/login",function(req,res){
    res.sendFile("login.html", {root: "./public/"});
});

router.get("/signup",function(req,res){
    res.sendFile("signup.html", {root: "./public"});
});

module.exports = router;