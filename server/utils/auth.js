const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhh';
const expiration = '2h';

module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },

    // this ensures requests are performing an auth request and checking for a valid JWT 
    authMiddleware: function({ req }) {
        // allows tol=ken to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;
        
        // separate "Bearer" from "<tokenvalue>"
        if (req.headers.authorization) {
            token = token 
                .split (' ') 
                .pop()
                .trim();
        }

        // if no token, return request object as is 
        if (!token) {
            return req;
        }

        // this try/catch prevents an error thrown on every request
        try {
            // decode and attach user data to request object 
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid Token');
        }

        // return updated request object 
        return req; 
    }
};