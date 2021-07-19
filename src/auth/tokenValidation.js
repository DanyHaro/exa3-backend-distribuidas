const jwt = require('jsonwebtoken');
const secret = 'Token';
const refreshToken = 'Secret-refresh-access-token';
module.exports = {
    checkToken: (req, res, next) => {
        const bearerHeader = req.headers['authorization'];
        
        if (typeof bearerHeader !== 'undefined') {
            const bearer = req.headers.authorization.split(' ')[1];
            // const bearerToken = bearer[1];
            const token = bearer;
            jwt.verify(token, secret, (err, decoded) => {
                console.log(req.headers.authorization,"HIJO PERRA");
                if (err) {
                    res.status(401).json({
                        success: 0,
                        message: "Invalid token"
                    });
                } else {
                    next();
                }
            });
        } else {
            res.status(401).json({
                success: 0,
                message: "Access denied unautorized user"
            });
        }
    }
}