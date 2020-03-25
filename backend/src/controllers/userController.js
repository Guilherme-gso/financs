const User = require('../models/User');

module.exports = {
  // Cadastro de usuarios
  async store (req, res) {
    const {name, email, password} = req.body;
    let user = await User.findOne({email});
    
    if(user) return res.status(400).json({error: 'User exists'});

    user = await User.create({
      name,
      email,
      password
    });
    user.password = undefined;
    return res.json({user});
  },

  // Listagem de usuarios
  async index (req, res) {
    const users = await User.find();
    res.json({users});
  },

  // Update de usuarios
  async update (req, res) {

    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body, {new: true});

    return res.json({user});
  },

  // Delete de usuarios
  async destroy (req, res) {
    await User.findByIdAndRemove(req.params.id);

    return res.send();
  }
}