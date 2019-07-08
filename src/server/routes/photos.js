var express = require("express");
const multer = require("multer");
var router = express.Router();

const PhotoModel = require("../db/models/photo");

const storage = multer.diskStorage({
  destination: "./public/images/photos",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const uploader = multer({ storage });

/* GET users listing. */
router.post("/upload", uploader.single("photo"), function(req, res, next) {
  const file = req.file;
  const meta = req.body;
  // デッバグのため、アップしたファイルの名前を表示する
  console.log(file, meta);
  // DBに写真データを名前と一緒に保存
  new PhotoModel({
    name: meta.name,
    //imagePath: file.path.replace("public/", ""),
    good: 0
  }).save(err => {
    if (err) {
      res.status(500);
    }
    // アップ完了したら200ステータスを送る
    else {
      res.status(200).json({ file, meta, msg: "image uploaded" });
    }
  });
});

router.get("/", (req, res) => {
  PhotoModel.find({}, (err, photoList) => {
    if (err) res.status(500).send();
    else res.status(200).send(photoList);
  });
});

router.put("/like", (req, res) => {
  const { id, uid } = req.body;
  let likeTmp = [];
  PhotoModel.findById(id, (err, photo) => {
    if (err) res.status(500).send();
    else {
      likeTmp = photo.like.includes(uid) ? photo.like : photo.like.push(uid);
      PhotoModel.findByIdAndUpdate(id, { like: likeTmp }, err => {
        if (err) res.status(500).send();
        else {
          PhotoModel.find({}, (findErr, photoList) => {
            if (findErr) res.status(500).send();
            else res.status(200).send(photoList);
          });
        }
      });
    }
  });
});

router.delete("/deletePhoto", (req, res) => {
  const { id } = req.body;
  PhotoModel.findByIdAndRemove(id, err => {
    if (err) res.status(500).send();
    else {
      PhotoModel.find({}, (findErr, photoList) => {
        if (findErr) res.status(500).send();
        else res.status(200).send(photoList);
      });
    }
  });
});

module.exports = router;
