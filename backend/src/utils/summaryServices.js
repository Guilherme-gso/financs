const Finance = require('../models/Finance');
const {Router} = require('express');
const routes = Router();
const reqId = require('../middlewares/midAuth');
routes.use(reqId);

async function getFinances (req, res) {

  const user = req.userId;
  const name = req.userName;
  const response = await Finance.find({user});
 
  const debts = response.map((debt, index) => {
    const debtValue = debt.debts;
    return debtValue;
  });

  const credits = response.map((credit)=> {
    let creditValue = credit.credits;
    return creditValue;
  });

  const resultCredit = credits.reduce((total, index) => {
    return total + index;
  } , 0)

  const resultDebts = debts.reduce((total, index) => {
    return total + index;
  } , 0)

  return res.json({credit: resultCredit, debt: resultDebts, name: name});
}

module.exports = {getFinances};