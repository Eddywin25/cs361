import PlayerStats from '../models/playerStatsModel';

export const getPlayerStats = async (req, res) => {
  try {
    const stats = await PlayerStats.find();
    res.json(stats);
  } catch (error) {
    res.status(500).send(error);
  }
};
