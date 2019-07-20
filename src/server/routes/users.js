var express = require("express");
const multer = require("multer");
var router = express.Router();
const UserModel = require("../db/models/user");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const storage = multer.diskStorage({
  destination: `src/server/public/images/avatar`,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const uploader = multer({ storage });

// アバターのアップロード
router.post("/avatar", uploader.single("avatar"), (req, res) => {
  const file = req.file;
  const _id = req.body._id;
  console.log(file);
  console.log(_id);
  UserModel.findByIdAndUpdate(
    _id,
    { avater: file.path.replace("src/server/public/", "/") },
    { new: true },
    (err, user) => {
      if (err) res.status(500).send();
      else res.status(200).json({ user });
    }
  );
});

// login
router.post("/login", function(req, res, next) {
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not right",
        user: user
      });
    }
    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }
      // generate a signed son web token with the contents of user object and return it in the response
      const token = jwt.sign(user.toJSON(), "your_jwt_secret");
      return res.json({ user, token });
    });
  })(req, res);
});

// idでfind
router.get("/me", function(req, res) {
  const _id = req.query._id;
  UserModel.findById(_id, (err, user) => {
    if (err) res.status(500);
    else res.status(200).json({ user });
  });
});

// 文字列で検索
router.get("/explore", function(req, res) {
  const searchText = req.query.searchText;
  UserModel.find(
    { id: new RegExp(".*" + searchText + ".*") },
    (err, userList) => {
      if (err) res.status(500);
      else res.status(200).json({ userList });
    }
  );
});

// プロフィール編集
router.post("/profileedit", function(req, res) {
  console.log(req.body);
  const { _id, values } = req.body;
  let userTmp = {};
  UserModel.findById(_id, (err, user) => {
    if (err) res.status(500).send();
    else {
      userTmp = user;
      values.id && (userTmp.id = values.id);
      values.mail && (userTmp.mail = values.mail);
      values.sex && (userTmp.sex = values.sex);
      values.desc && (userTmp.desc = values.desc);
      values.tel && (userTmp.tel = values.tel);
      console.log("userTmp", userTmp);
      UserModel.findByIdAndUpdate(
        _id,
        {
          id: userTmp.id,
          sex: userTmp.sex,
          mail: userTmp.mail,
          tel: userTmp.tel,
          desc: userTmp.desc
        },
        { new: true },
        (err, user) => {
          console.log(user);
          if (err) res.status(500).send();
          else res.status(200).json({ user });
        }
      );
    }
  });
});

// follow
router.post("/follow", (req, res) => {
  const { _id, targetId } = req.body;
  let followTmp = [];
  let followerTmp = [];
  UserModel.findById(_id, (err, user) => {
    if (err) res.status(500).send();
    else {
      followTmp = user.follow.includes(targetId)
        ? user.follow
        : [...user.follow, targetId];
      UserModel.findByIdAndUpdate(_id, { follow: followTmp }, err => {
        if (err) res.status(500).send();
        else {
          UserModel.findById(targetId, (err, user) => {
            if (err) res.status(500).send();
            else {
              followerTmp = user.follower.includes(_id)
                ? user.follower
                : [...user.follower, _id];
              UserModel.findByIdAndUpdate(
                targetId,
                { follower: followerTmp },
                err => {
                  if (err) res.status(500).send();
                  else res.status(200).json({ user });
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
router.post("/unfollow", (req, res) => {
  const { _id, targetId } = req.body;
  let followTmp = [];
  let followerTmp = [];
  UserModel.findById(_id, (err, user) => {
    if (err) res.status(500).send();
    else {
      followTmp = user.follow.includes(targetId)
        ? user.follow.filter(item => item != targetId)
        : user.follow;
      UserModel.findByIdAndUpdate(_id, { follow: followTmp }, err => {
        if (err) res.status(500).send();
        else {
          UserModel.findById(targetId, (err, user) => {
            if (err) res.status(500).send();
            else {
              followerTmp = user.follower.includes(_id)
                ? user.follower.filter(item => item != _id)
                : user.follower;
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
router.post("/signup", function(req, res) {
  const { id, password } = req.body;
  UserModel.findOne({ id, password }).then(user => {
    console.log(user);
    if (!user && id != "" && password != "") {
      new UserModel({
        id,
        password,
        avater: "",
        photos: [],
        follow: [],
        follower: [],
        mail: "",
        tel: null,
        sex: "",
        desc: ""
      }).save(err => {
        if (err) res.status(500).send();
        else {
          UserModel.find({}, (findErr, userList) => {
            if (findErr) res.status(500).send();
            else res.status(200).json({ userList });
          });
        }
      });
    } else {
      res.json({ msg: "このIDとパスワードは使用できません。" });
    }
  });
});

module.exports = router;
