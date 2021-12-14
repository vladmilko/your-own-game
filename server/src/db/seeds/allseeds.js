const User = require('../models/user');
const Deck = require('../models/deck');
const Card = require('../models/card');
const { connection } = require('mongoose');
const { connectDB, disconnectDB } = require('../config');

(async() => {
  connectDB();

  await connection.dropDatabase();

  const users = [
    {
      name: 'admin',
      email: 'admin@mail.ru',
      password: '$2a$10$KQ.f3itS0jd5ypR/3kHkd.gYTw92zRxUoqiWJqry6/XKI3QX1jd/K',
    },
  ];
  await User.insertMany(users);

  const card = [
    {
      deck: 'Операционные системы',
      question: 'По данным за май 2011 года, именно ЭТА операционная система остается самой популярной, с рыночной доле более 37%',
      answer: 'Windows XP',
      score: 200,
    },
    {
      deck: 'Операционные системы',
      question: 'Именно на ЭТУ ОС во многом ориентировался Линус Торвальдс в начале написания ядра Linux.',
      answer: 'Minix',
      score: 400,
    },
    {
      deck: 'Операционные системы',
      question: 'Имено ОН является автором песни “DOS” на мотив “Дождя” ДДТ.',
      answer: 'Леонид Каганов',
      score: 600,
    },
    {
      deck: 'Операционные системы',
      question: 'В заимствовании кода именно из ЭТОЙ ОС обвиняли IBM, когда та выпустила PC-DOS, но дело удалось решить досудебным соглашением.',
      answer: 'CP/M',
      score: 100500,
    },

    {
      deck: 'Рекурсия',
      question: 'Наиболее распространено ЭТО шутливое словарное определение рекурсии.',
      answer: '«см. рекурсия»',
      score: 200,
    },
    {
      deck: 'Рекурсия',
      question: 'Салат «Рекурсивный» состоит из помидоров, огурцов и НЕГО.',
      answer: 'Салат',
      score: 400,
    },
    {
      deck: 'Рекурсия',
      question: 'Алгоритм вычисления ЭТОГО числового ряда является классическим обучающим примером применения рекурсии.',
      answer: 'Числа Фибоначчи',
      score: 600,
    },
    {
      deck: 'Рекурсия',
      question: 'Интересный пример рекурсии можно найти в ЭТОМ фильме, когда заглавный герой через специальную дверь попадает в свое же сознание.',
      answer: 'Быть Джоном Малковичем',
      score: 100500,
    },

    {
      deck: 'Офисные пакеты',
      question: 'Самым известным офисным пакетом, несомненно, является ОН.',
      answer: 'Microsoft Office',
      score: 200,
    },
    {
      deck: 'Офисные пакеты',
      question: 'ЭТОТ офисный пакет от IBM является идейным наследником Lotus SmartSuite, хотя и основан на совершенно другой кодовой базе.',
      answer: 'Lotus Symphony',
      score: 400,
    },
    {
      deck: 'Офисные пакеты',
      question: 'WordPerfect Suite был собран компанией Novell в 1994 из различных, ранее не интегрированных приложений, из которых наиболее известным был текстовый процессор WordPerfect. В 1996 году пакет был продан ЭТОЙ компании, и под ее брендом развивается и по сей день.',
      answer: 'Corel',
      score: 600,
    },
    {
      deck: 'Офисные пакеты',
      question: 'ЭТОТ офисный пакет от немецких разработчиков выпускается с 1989 года и имеет версии под Windows, Linux, Windows Mobile и Windows CE.',
      answer: 'SoftMaker',
      score: 100500,
    },
  
    {
      deck: 'Языки программирования и их создатели (я вам – имя автора, вы мне – язык)',
      question: 'Бьёрн Страуструп',
      answer: 'С++',
      score: 200,
    },
    {
      deck: 'Языки программирования и их создатели (я вам – имя автора, вы мне – язык)',
      question: 'Расмус Лердорф',
      answer: 'PHP',
      score: 400,
    },
    {
      deck: 'Языки программирования и их создатели (я вам – имя автора, вы мне – язык)',
      question: 'Гвидо ван Россум',
      answer: 'Python',
      score: 600,
    },
    {
      deck: 'Языки программирования и их создатели (я вам – имя автора, вы мне – язык)',
      question: 'Джон Бэкус',
      answer: 'Fortran',
      score: 100500,
    },

    {
      deck: 'Игровые консоли',
      question: 'На западе эта консоль называется NES – Nintendo entertainment system. У нас же более известен ее аппаратный клон с ТАКИМ названием.',
      answer: 'Dendy',
      score: 200,
    },
    {
      deck: 'Игровые консоли',
      question: 'Именно на ЭТОЙ платформе впервые появился сверхскоростной ежик Соник.',
      answer: 'Sega',
      score: 400,
    },
    {
      deck: 'Игровые консоли',
      question: 'Приставки Sony Playstation 3 и Xbox 360 относятся к ЭТОМУ поколению игровых платформ.',
      answer: '7',
      score: 600,
    },
    {
      deck: 'Игровые консоли',
      question: 'ЭТА консоль считается первой в мире домашней игровой приставкой.',
      answer: 'Magnavox Odyssey',
      score: 100500,
    },
  ];

  const Cards = await Card.insertMany(card);
  console.log(Cards);

  const deck = [
    {
      title: 'Операционные системы',
      cards_array: (Cards.filter((el) => el.deck === 'Операционные системы')
        .map((el) => el._id)
      ),
    },
    {
      title: 'Рекурсия',
      cards_array: (Cards.filter((el) => el.deck === 'Рекурсия')
        .map((el) => el._id)
      )
    },
    {
      title: 'Офисные пакеты',
      cards_array: (Cards.filter((el) => el.deck === 'Офисные пакеты')
      .map((el) => el._id)
      )
    },
    {
      title: 'Языки программирования и их создатели (я вам – имя автора, вы мне – язык)',
      cards_array: (Cards.filter((el) => el.deck === 'Языки программирования и их создатели (я вам – имя автора, вы мне – язык)')
        .map((el) => el._id)
      )
    },
    {
      title: 'Игровые консоли',
      cards_array: (Cards.filter((el) => el.deck === 'Игровые консоли')
      .map((el) => el._id)
    )
    },
  ];

  await Deck.insertMany(deck);

  disconnectDB();
})();
































































// const User = require('../models/user');
// const Notebook = require('../models/notebook');
// const Note = require('../models/note')
// const { connection } = require('mongoose');
// const { connectDB, disconnectDB } = require('../config');

// (async() => {
//   connectDB();

//   await connection.dropDatabase();

//   const users = [
//     {
//       name: 'admin',
//       email: 'admin@mail.ru',
//       password: '$2a$10$KQ.f3itS0jd5ypR/3kHkd.gYTw92zRxUoqiWJqry6/XKI3QX1jd/K',
//     },
//   ];

//   const Users = await User.insertMany(users);
  
//   const cards = [
//     {
//       name: 'admin',
//       email: 'admin@mail.ru',
//       password: '$2a$10$KQ.f3itS0jd5ypR/3kHkd.gYTw92zRxUoqiWJqry6/XKI3QX1jd/K',
//     },
//   ];

//   const notebooks = [
//     {
//       name: 'notebook 1',
//       user_id: (await Users.find((el) => el.email === 'admin@mail.ru'))._id,
//     },
//     {
//       name: 'notebook 2',
//       user_id: (await Users.find((el) => el.email === 'admin@mail.ru'))._id,
//     },
//   ];

//   const Notebooks = await Notebook.insertMany(notebooks);

//   const notes = [
//     {
//       name: 'Note 1',
//       body: 'werwerqrqwrqdqdsfasdfasfsa',
//       user_id: (await Users.find((el) => el.email === 'admin@mail.ru'))._id,
//       notebook_id: (await Notebooks.find((el) => el.name === 'notebook 1'))._id,
//     },
//     {
//       name: 'Note 2',
//       body: 'asdgsgfsdfgsdgfsdgsdgsdgsdgfqw3421342334314',
//       user_id: (await Users.find((el) => el.email === 'admin@mail.ru'))._id,
//       notebook_id: (await Notebooks.find((el) => el.name === 'notebook 1'))._id,
//     },
//     {
//       name: 'Note 3',
//       body: '1234234r2ede2c2er123s142341s4',
//       user_id: (await Users.find((el) => el.email === 'admin@mail.ru'))._id,
//       notebook_id: (await Notebooks.find((el) => el.name === 'notebook 2'))._id,
//     },
//   ];

//   await Note.insertMany(notes);

//   disconnectDB();
// })();
