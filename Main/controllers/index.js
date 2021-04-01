const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/api', userRoutes);
router.use('/', homeRoutes);

// return homepage must remain 
router.get('/', async (req, res) => {
     res.render("homepage")
   })
 router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      
      // Serialize data so the template can read it
    
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        projects, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
router.get('/groups', async (req, res) => {
    res.render("groupspage")
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
