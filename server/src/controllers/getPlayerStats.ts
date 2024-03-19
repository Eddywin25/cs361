import { Request, Response } from 'express';
import Player from '../models/playerModel';
import GameStats from '../models/gameStatsModel';

const getAllPlayerStats = async (req: Request, res: Response) => {
  try {
    const players = await Player.find()
      .populate({
        path: 'team_id',
        select: 'name',
        model: 'teams',
        localField: 'team_id',
        foreignField: 'id',
      })
      .exec();

    const playerIds = players.map((player) => player.id);

    const gameStats = await GameStats.find({ player_id: { $in: playerIds } }).exec();

    const playersWithStats = players.map((player) => {
      const stats = gameStats.filter((stat) => stat.player_id === player.id);
      return { ...player.toObject(), game_stats: stats };
    });

    res.json(playersWithStats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
};
export default getAllPlayerStats;
