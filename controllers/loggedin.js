const db = require("../routes/auth")
const jwt = require("jsonwebtoken");
const loggedIn = (req,res, next) =>{

    if(!req.cookies.UserRegistered) return next();
    try {
        const decoded = jwt.verify(req.cookies.UserRegistered, process.env.JWT_SECRET);
        // console.log(decoded.id)
        db.query("SELECT * FROM users WHERE PersonID = ?",[decoded.id], (err, result) => {
            if(err) return next();
            req.user = result[0];
            return next();
        })
    } catch (err) {
        if(err) return next()
        
    }

}

module.exports = loggedIn;