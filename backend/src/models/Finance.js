const mongoose = require('mongoose');


const debtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    min: 0,
  },
});

const creditSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    min: 0,
  },

});

const FinanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true
  },
  credits: creditSchema.obj.value,
  debts: debtSchema.obj.value,
  nameCredit: creditSchema.obj.name,
  nameDebt: debtSchema.obj.name
});


module.exports = mongoose.model('Finances', FinanceSchema);