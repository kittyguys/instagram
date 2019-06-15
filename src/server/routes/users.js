var express = require("express");
const multer = require("multer");
var router = express.Router();
const UserModel = require("../db/models/user");

const storage = multer.diskStorage({
  destination: "./public/images/avatars",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const uploader = multer({ storage });

// login
router.post("/login", function(req, res, next) {
  const { id, password } = req.body;
  UserModel.findOne({ id, password }, (err, result) => {
    if (result === null) res.status(500);
    else res.status(200).json({ id: result._id });
  });
});

// idでfind
router.get("/:id", function(req, res) {
  const { uid } = req.body;
  UserModel.findById(uid, (err, user) => {
    if (err) res.status(500);
    else res.status(200).json(user);
  });
});

// follow
router.put("/follow", (req, res) => {
  const { uid, targetId } = req.body;
  let followTmp = [];
  let followerTmp = [];
  UserModel.findById(uid, (err, user) => {
    if (err) res.status(500).send();
    else {
      followTmp = user.follow.includes(targetId)
        ? user.follow
        : user.follow.push(targetId);
      UserModel.findByIdAndUpdate(uid, { follow: followTmp }, err => {
        if (err) res.status(500).send();
        else {
          UserModel.findById(targetId, (err, user) => {
            if (err) res.status(500).send();
            else {
              followerTmp = user.follower.includes(uid)
                ? user.follower
                : user.follower.push(uid);
              UserModel.findByIdAndUpdate(
                targetId,
                { follower: followerTmp },
                err => {
                  if (err) res.status(500).send();
                  else res.status(200).json({ result: "OK" });
                }
              );
            }
          });
        }
      });
    }
  });
});

// unfollow
router.put("/unfollow", (req, res) => {
  const { uid, targetId } = req.body;
  let followTmp = [];
  let followerTmp = [];
  UserModel.findById(uid, (err, user) => {
    if (err) res.status(500).send();
    else {
      followTmp = user.follow.includes(targetId)
        ? user.follow
        : user.follow.splice(user.follow.indexOf(targetId), 1);
      UserModel.findByIdAndUpdate(uid, { follow: followTmp }, err => {
        if (err) res.status(500).send();
        else {
          UserModel.findById(targetId, (err, user) => {
            if (err) res.status(500).send();
            else {
              followerTmp = user.follower.includes(uid)
                ? user.follower
                : user.follower.splice(user.follower.indexOf(uid), 1);
              UserModel.findByIdAndUpdate(
                targetId,
                { follower: followerTmp },
                err => {
                  if (err) res.status(500).send();
                  else res.status(200).json({ result: "OK" });
                }
              );
            }
          });
        }
      });
    }
  });
});

// avatarのupload
router.post("/upload", uploader.single("image"), function(req, res, next) {
  const file = req.file;
  const meta = req.body;
  // デッバグのため、アップしたファイルの名前を表示する
  console.log(file, meta);
  // DBに写真データを名前と一緒に保存
  UserModel.findByIdAndUpdate(
    uid,
    { avater: file.path.replace("public/", "") },
    err => {
      if (err) res.status(500);
      // アップ完了したら200ステータスを送る
      else res.status(200).json({ file, meta, msg: "image uploaded" });
    }
  );
});

// userの登録
router.post("/register", function(req, res) {
  const { id, password } = req.body;
  new UserModel({
    id,
    password,
    avater: "",
    photos: [],
    follow: [],
    follower: []
  }).save(err => {
    if (err) res.status(500).send();
    else {
      UserModel.find({}, (findErr, userList) => {
        if (findErr) res.status(500).send();
        else res.status(200).send(userList);
      });
    }
  });
});

module.exports = router;
