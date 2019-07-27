var express = require("express");
const multer = require("multer");
var router = express.Router();

const PhotoModel = require("../db/models/photo");
const UserModel = require("../db/models/user");

const storage = multer.diskStorage({
  destination: "src/server/public/images/photos",
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
    uid: meta.uid,
    name: meta.name,
    imagePath: file.path.replace("src/server/public/", "/"),
    date: file.lastModified,
    like: []
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

router.post("/", async (req, res) => {
  const uid = req.body.myid;
  let followingUid = [];
  let photoList = [];

  await UserModel.findById(uid, (err, user) => {
    console.log(err, user);
    if (err) return;
    followingUid = user.follow;
  });

  for (let i = 0; i < followingUid.length; i++) {
    PhotoModel.find({ uid: followingUid[i] }, (err, photos) => {
      if (err) res.status(500).send();
      else {
        for (let j = 0; j < photos.length; j++) {
          UserModel.findById(followingUid[i], (err, user) => {
            if (err) res.status(500).send();
            else {
              const photoWithUser = { photo: photos[j], user: user };
              photoList = [...photoList, photoWithUser];
              if (i === followingUid.length - 1 && j === photos.length - 1) {
                res.status(200).json(photoList);
              }
            }
          });
        }
      }
    });
  }
});

router.get("/me", (req, res) => {
  const uid = req.query._id;
  PhotoModel.find({ uid }, (err, photoList) => {
    if (err) res.status(500).send();
    else res.status(200).json({ photoList });
  });
});

router.post("/like", (req, res) => {
  const { id, uid } = req.body;
  let likeTmp = [];
  PhotoModel.findById(id, (err, photo) => {
    if (err) res.status(500).send();
    else {
      likeTmp = photo.like.includes(uid)
        ? photo.like.filter(n => n !== uid)
        : [...photo.like, uid]; // pushは使えなかった
      PhotoModel.findByIdAndUpdate(id, { like: likeTmp }, err => {
        if (err) res.status(500).send();
        else {
          res.status(200).send(likeTmp);
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
