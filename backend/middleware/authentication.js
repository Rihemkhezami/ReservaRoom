import jwt from 'jsonwebtoken';





// Middleware to verify authentication via JWT
export  function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).send('invalid token ');
    }
    try {
        const tokenData = token.split(' ')[1];
        const decodedToken = jwt.verify(tokenData,'your_secret_key');
        req.userId=decodedToken._id;
       
        next();
    } catch (error) {
        return res.status(401).send('Authentication failed:invalid token ')

    }
}


export async function protect (req,res,next) {
    if(!req.headers.authorization){
        return res.status(302).json({success : false , message: "no auth"});
    }

    const token = req.headers.authorization.replace("Bearer","").trim();

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded)
       // const user = await User.findOne({"_id":decoded.id});
         const user = await userM.findById(decoded.id);
         req.user = user;
         next();
    } catch (err) {
        res.status(302).json({success: false, message: "not logged in"});
    }
}