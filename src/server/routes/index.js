var express = require('express');
var router = express.Router();
const UserModel = require('../db/models/user');

/* GET home page. */
router.post('/login', function(req, res, next) {
  const {id, password} = req.body;
  UserModel.findOne({ id, password }, (err, result) => {
    if(result === null) res.status(500)
    else res.status(200).json({ id: result.id })
  })
});

module.exports = router;
