router.get('/', async (req, res)=>{
    res.render("homepage")
    })
    
router.get('/groups', async (req, res)=>{
    res.render("groupspage")
    })
    
router.get('/meditate', async (req, res)=>{
    res.render("meditatepage")
    })
    
router.get('/login', async (req, res)=>{
    res.render("loginpage")
    })
    
router.get('/signup', async (req, res)=>{
    res.render("signuppage")
    })
    
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render("homepage")
})
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
