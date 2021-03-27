const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res)=>{
res.render("homepage")
})

router.get('/groups', (req, res)=>{
res.render("groups")
})

router.get('/meditate', (req, res)=>{
res.render("meditate")
})

router.get('/login', (req, res)=>{
res.render("login")
})

router.get('/signup', (req, res)=>{
res.render("signup")
})

module.exports = router;
