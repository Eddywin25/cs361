import Game from '../models/gameModel';

export const getGame = async (req: any, res: any) => {
  try {
    const game = await Game.find();
    res.json(game);
  } catch (error) {
    res.status(500).send(error);
  }
};
