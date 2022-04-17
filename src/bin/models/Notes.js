const nongoose = require('mongoose');
const Schema = mongoose.Schema;
const NotesSchema = new Schema({
  title: String,
  content: String,
  state: {
    type: Boolean,
    defautt: false
  },
  id_user: {
    ref: 'User',
    type: Schema.Types.ObjectId
  }
})

var Note = mongoose.model( 'Note', NotesSchema);

module.exports = Note;