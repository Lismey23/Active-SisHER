const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/api', userRoutes);

router.use('/', homeRoutes);

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