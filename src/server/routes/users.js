var express = require('express');
const multer = require('multer')
var router = express.Router();
const UserModel = require('../db/models/user')

const storage =  multer.diskStorage({
  destination: './public/images/avatars',
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const uploader = multer({ storage })

/* GET users listing. */
router.post('/upload', uploader.single('image'), function(req, res, next) {

  const file = req.file
  const meta = req.body
  // デッバグのため、アップしたファイルの名前を表示する
  console.log(file, meta)
  // アップ完了したら200ステータスを送る
  res.status(200).json({file, meta})
});

router.post('/register', function(req, res) {
  const { id, password } = req.body
  new UserModel({
    id,
    password,
    avater: "",
  }).save(err => {
    if(err) res.status(500).send()
    else {
      UserModel.find({}, (findErr, userList) => {
        if(findErr) res.status(500).send()
        else res.status(200).send(userList)
      })
    }
  })
})

module.exports = router;
