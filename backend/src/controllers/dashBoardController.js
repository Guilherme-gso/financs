const { Router } = require('express');

const routes = Router();

const midAuth = require('../middlewares/midAuth');
const summaryService = require('../utils/summaryServices');

const Finance = require('../models/Finance');

routes.use(midAuth);

routes.get('/finances', async (req, res) => {
    const user = req.userId;
    const finance = await Finance.find({user}).populate('user');
    return res.json({finance});
})

routes.post('/add/finance', async (req, res) => {
  const {name, month, year, credits, debts, nameCredit, nameDebt} = req.body;

  console.log(credits);

  try {
    const finance = await Finance.create({
      name, month, year, debts, credits,
      nameCredit, nameDebt, user: req.userId});
  
    return res.json({finance});
  }
   catch (e) {
     return res.status(400).json({error: "Register error"});
   }

});


routes.delete('/delete/finance/:id', async (req, res) => {
  await Finance.findByIdAndRemove(req.params.id);
  return res.send();
});

routes.get('/summary', summaryService.getFinances);
  

module.exports = routes;