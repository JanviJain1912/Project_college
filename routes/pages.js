const express =  require("express");
const loggedIn = require("../controllers/loggedin");
const router = express.Router();

router.get("/", loggedIn, (req,res) => {
    if (req.user){
        res.render("index", {status:"loggedIn", user: req.user});
    }
    else{
        res.render("index", {status:"no", user: "nothing"});
    }
   
});

router.get("/login",function(req,res){
    res.sendFile("login.html", {root: "./public/"});
});

router.get("/signup",function(req,res){
    res.sendFile("signup.html", {root: "./public"});
});

module.exports = router;