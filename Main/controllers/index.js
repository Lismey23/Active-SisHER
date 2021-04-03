const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const homeRoutes = require('./homeRoutes');
const { User } = require('../models');

router.use('/api/users', userRoutes);
router.use('/', homeRoutes);

// return homepage must remain 
router.get('/', async (req, res) => {
     res.render("homepage")
   })
 router.get('/', async (req, res) => {
    try {
      res.render('homepage', { 
        projects, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/groups', async (req, res) => {
  const userData = await User.findByPk(req.session.user_id)
  const user = userData.get({plain:true});
  const allUserData = await User.findAll({
    where: {
      activity: user.activity
    }
  })
  const allUsers = allUserData.map(user=> user.get({plain:true}))
    res.render("groupspage",{
      user,
      allUsers
    })
})

router.get('/meditate', async (req, res) => {
    res.render("meditatepage")
})

router.get('/login', async (req, res) => {
    res.render("loginpage")
})

router.get('/signup', async (req, res) => {
   res.render("signuppage")
})

module.exports = router;
