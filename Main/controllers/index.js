const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/api', userRoutes);

router.use('/', homeRoutes);

router.get('/', async (req, res) => {
    res.render("./homepage.handlebars")
})
router.get('/groups', async (req, res) => {
     res.render("./groupspage.handlebars")
 })
 router.get('/meditate', async (req, res) => {
     res.render("./meditatepage.handlebars")
 })
 router.get('/login', async (req, res) => {
     res.render("./loginpage.handlebars")
 })
 router.get('/signup', async (req, res) => {
    res.render("./signuppage.handlebars")
 })
module.exports = router;
