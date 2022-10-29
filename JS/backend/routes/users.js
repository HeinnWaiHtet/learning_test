var express = require('express');
var router = express.Router();
const user = require('./../controllers/User');
var users = require('./../controllers/UserController');
const {save} = require("debug");
const {saveUser} = require("../controllers/User");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
// router.get('/hello', user.hello);
//
// router.get('/:userId', function (req, res, next){
//   res.send(`user Id ${req.params["userId"]}`)
//   next();
// })
//
// router.post('/', saveUser);

router.get('/:userId', users.getUserById);
router.post('/', users.registerUser);
router.post('/login', users.login);

module.exports = router;
