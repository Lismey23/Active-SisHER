const router = require('express').Router();
const { User } = require('../../models');


router.get('/groups', async (req, res) => {
  const users = await User.findAll();
console.log(users.every(user => user instanceof User)); // true
console.log("All users:", JSON.stringify(users, null, 2));
}) 
// User.findAll = (req, res) => {
//   const activity = req.query.activity;
//   var condition = activity ? { activity: `%${activity}%` } 
// };
//   User.findAll({ where: condition })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
//   };



// router.get('/groups', User
  
  
  // async (req, res) => {
  //   try {
  //     User.findALL( {
  //       where: [
  //         {
  //           activity: req.session.activity
  //         },
  //       ],
  //     });
  //     const group = groupData.get({ plain: true });
  //     res.render("groupspage", {
  //       ...User,
  //       logged_in: req.session.logged_in
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  

// router.post //updating
// router.get //read
// router.use //

module.exports = router;