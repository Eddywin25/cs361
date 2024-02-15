import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GameSchema = new Schema({
  id: String,
  player_id: String,
  points: String,
  fga: String,
  fgm: String,
  // add other fields here
});

const Game = mongoose.model('game_stats', GameSchema);

export default Game;
