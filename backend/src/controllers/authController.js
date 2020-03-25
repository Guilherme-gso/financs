const User = require('../models/User');
const authConfig = require('../services/auth.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
  async store (req, res) {
    const {email, password} = req.body;

    const user = await User.findOne({email}).select('+password');

    if(!user) return res.status(400).json({error: 'User not found'});

    if(!await bcrypt.compare(password, user.password))
    return res.status(400).json({error: 'Invalid password'});

    const token = jwt.sign(
      {id: user.id, name: user.name}, 
      authConfig.secret, 
      {expiresIn: 86400}
    );
    user.password = undefined;
    return res.json({user, token});
  }
}