const Deck = require('../db/models/deck');
const Card = require('../db/models/card');
const Round = require('../db/models/round');

exports.getAllDecks = async (req, res) => {
  let AllDecks;
  try {
    AllDecks = await Deck.find().populate('cards_array').exec();
    res.json(AllDecks);
  } catch(err) {console.log('Не удалось получить данные из БД', err)};
} 

exports.getAllStats = async (req, res) => {
  let id = req.params.id;
  let allStats;
  try {
    allStats = await Round.find({user_id: id}).exec();
    res.json(allStats);
  } catch(err) {console.log('Не удалось получить данные из БД', err)};
} 
