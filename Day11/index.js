const express = require('express');
const jwt =require('jsonwebtoken')

function authenticationMiddleware(req, res, next) {
    const  token = req.headers.authorization;

    if(!token){
        return res.status(401).json({ error: 'Unauthorized - No token provided' });
    }

    jwt.verify(token, 'invalidSecretKey', (err, decoded) =>{
        if(err){
            return res.status(401).json({ error: 'Unauthorized - Invalid token' });
        }

        req.user =decoded;
        next();
    })
}

const app = express();
app.use("/secure-route", authenticationMiddleware);

app.get("/secure-route/testcase", (req,res) =>{
    res.json({message:"Authenticated route testcase" , user:req.user});
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

