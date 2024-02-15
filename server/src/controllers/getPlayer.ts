import Player from '../models/playerModel';

export const getPlayer = async (req: any, res: any) => {
  try {
    const player = await Player.find();
    res.json(player);
  } catch (error) {
    res.status(500).send(error);
  }
};
