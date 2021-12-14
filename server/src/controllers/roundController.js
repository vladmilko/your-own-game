const Round = require('../db/models/round');

exports.getUserRounds = async (req, res) => {
  let userRounds;
  try {
    userRounds = await Round.find({ user_id: req.params.userId }).exec();
    res.json(userRounds);
  } catch(err) {console.log('Не удалось получить данные из БД', err)};
}

exports.addRound = async (req, res) => {
  const { date, countAnsweredCard, totalScore, userId } = req.body;
  try {
    await Round.create({
      date,
      count_card: countAnsweredCard,
      total_score: totalScore,
      user_id: userId,
    });
  } catch(err) {console.log('Не удалось добавить данные в БД', err)};
}