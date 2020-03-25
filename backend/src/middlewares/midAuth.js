const jwt = require('jsonwebtoken');
const authConfig = require('../services/auth.json');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader) return res.status(401).json({error: 'No token provided'});

  const parts = authHeader.split(' ');

  if(!parts.length === 2) return res.status(401).json({error: 'Token error'});

  const [ bearer, token ] = parts;

  if(!/^Bearer$/i.test(bearer)) return res.status(401).json({error: 'Malformated token'});

  jwt.verify(token, authConfig.secret, function(err, decoded) {
    if(err) return res.status(401).json({error: 'Invalid token'});
    req.userId = decoded.id;
    req.userName = decoded.name;
    return next()
  });
}