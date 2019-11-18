
const mongoose = require('mongoose')
const connectionURL = 'mongodb+srv://admin:admin@cluster0-dkrtc.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true, // crear indexes
  useUnifiedTopology: true
})
