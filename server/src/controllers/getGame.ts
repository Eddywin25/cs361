import Game from '../models/gameModel';

export const getGame = async (req, res) => {
  try {
    const game = await Game.find();
    res.json(game);
  } catch (error) {
    res.status(500).send(error);
  }
};
