const router = require('express').Router();
// const userRoutes = require('./userRoutes');

// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

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

module.exports = router;
