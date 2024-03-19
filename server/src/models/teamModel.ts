import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  id: String,
  name: String,
  city: String,
  state: String,
  // add other fields here
});

const Team = mongoose.model('teams', TeamSchema);

export default Team;
