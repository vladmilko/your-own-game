module.exports = (req, res, next) => {
  console.log('file /middelware/isUser.js req.user :', req.user);
  next();
};

// module.exports = (req, res, next) => {
//   console.log('file /middelware/user.js req.session.user :', req.session.user);
//   if (req.session.user) {
//     res.locals.username = req.session?.user?.name;
//     res.locals.userId = req.session?.user?.id;
//   }
    
//   next();
// };
