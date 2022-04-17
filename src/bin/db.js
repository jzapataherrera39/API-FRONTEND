const nongoose = require('mongoose');

const MONGO_URI = 'mongodb://Localhost:27017/notes-app';

// Models
const User = require('./models/User');
const Note = require('./models/Notes');

class Controller {
  constructor () {
    this.connect();
  }
  async connect() {
    try {
     await mongoose.connect(MONGO_URI,{
         userNewUrlParser: True
     })
          console.info('Connected to DB');
     } catch(err) {
          console.error(err);
    }
  }
}

exports.app = app;