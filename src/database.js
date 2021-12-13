import mongoose from 'mongoose'

// const DB_URI = `mongodb+srv://luis:luis@cluster0.cajuf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const DB_URI = `mongodb+srv://test:test@cluster0.rghij.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose
  .connect(DB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useUniFiedTopology: true
    // useCreateIndex: true
  })
  .then(db => console.log('DB is connected'))
  .catch(error => console.log(error))

module.exports = mongoose
