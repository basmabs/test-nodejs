const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Test-Nodejs').then(() => {
  console.log('Server is running')
}).catch(error => {
  console.log(error)
})