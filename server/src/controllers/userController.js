const User = require('../db/models/user');

exports.editUser = async (req, res) => {
  const { userId, data} = req.body;

  console.log('server iddd=>', userId)
  try {
    await User.findByIdAndUpdate(userId, {
      name: data,
    });

    let newUser = await User.findById(userId);
    res.json(newUser).end();
  } catch(err) {
    console.log('Не удалось добавить данные в БД', err)
  };
}
