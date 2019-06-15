var express = require('express');
const multer = require('multer')
var router = express.Router();

const Post = require('../models/posts')

const storage =  multer.diskStorage({
  destination: './public/images',
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
  // DBに写真データを名前と一緒に保存
  new Post({
    name: meta.name,
    imagePath: file.path.replace('public/', ''),
    good: 0,
  }).save(err => {
    if(err) res.status(500)
    // アップ完了したら200ステータスを送る
    else res.status(200).json({file, meta, msg: 'image uploaded'})
  })
});

router.get('/getList', (req, res) => {
  Post.find({}, (err, photoList) => {
      if(err) res.status(500).send()
      else res.status(200).send(photoList)
  })
})

router.put('/count', (req, res) => {
  const { id } = req.body
  Post.findByIdAndUpdate(id, { $inc: {"good": 1}}, err => {
    if(err) res.status(500).send()
    else {
      Post.find({}, (findErr, photoList) => {
        if(findErr) res.status(500).send()
        else res.status(200).send(photoList)
      })
    }
  })
})

router.delete('/deletePhoto', (req, res) => {
  const { id } = req.body
  Post.findByIdAndRemove(id, err => {
    if(err) res.status(500).send()
    else {
      Post.find({}, (findErr, photoList) => {
        if(findErr) res.status(500).send()
        else res.status(200).send(photoList)
      })
    }
  })
})

module.exports = router;
