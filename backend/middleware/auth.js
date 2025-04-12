const jwt = require('jsonwebtoken');

const auth = (role) => (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.role)
    req.user = decoded;
    console.log(role)
    if (role && req.user.role !== role) {
      return res.status(403).json({ message: 'Access denied' });
      
    }

    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = auth;