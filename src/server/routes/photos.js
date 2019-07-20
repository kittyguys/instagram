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

// router.get("/", async (req, res) => {
//   const uid = "5d0f4f3f7b45e34c6a3dc056";
//   let json;

//   await UserModel.findById(uid, (err, user) => {
//     ["5d32a2fb72eef18c9090b5c5"].map(async id => {
//       await PhotoModel.findById(id, (err, photos) => {
//         json = { user, photos };
//       });
//     });
//   });

//   //user.following = ["5d32a2fb72eef18c9090b5c5"];

//   console.log(json);

//   res.status(200).json(json);
// });

router.get("/", async (req, res) => {
  const uid = "5d0f4f3f7b45e34c6a3dc056";
  let photoList = [];

  PhotoModel.find({ uid: uid }, (err, photos) => {
    if (err) res.status(500).send();
    else {
      for (let i = 0; i < photos.length; i++) {
        UserModel.findById(uid, (err, user) => {
          if (err) res.status(500).send();
          else {
            const photoWithUser = { photo: photos[i], user: user };
            photoList = [...photoList, photoWithUser];
            if (i === photos.length - 1) {
              console.log(photoList);
              res.status(200).json(photoList);
            }
          }
        });
      }
    }
  });
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
