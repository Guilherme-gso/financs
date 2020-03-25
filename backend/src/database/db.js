const mongoose = require('mongoose');

mongoose.connect(
'mongodb://localhost:db_financs', 
{
  useUnifiedTopology: true,
  useNewUrlParser: true
})