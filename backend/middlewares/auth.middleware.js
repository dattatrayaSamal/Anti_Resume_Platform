const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
    
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ success: false, message: "Access denied. Please login." });
    }

    jwt.verify(token, "user_key", (err, decoded) => {
        if (err) {
            console.log("Token verification failed:", err.message); 
            return res.status(401).json({ success: false, message: "Invalid or expired token." });
        }
        req.user = decoded;
        console.log(decoded)
        next();
    });
};

module.exports = authentication;
