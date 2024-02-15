import Team from '../models/teamModel';

export const getTeam = async (req, res) => {
  try {
    const team = await Team.find();
    res.json(team);
  } catch (error) {
    res.status(500).send(error);
  }
};
