const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const UserModel = require("./db/models/user");
passport.use(
  new LocalStrategy(
    {
      usernameField: "id",
      passwordField: "password"
    },
    function(id, password, cb) {
      //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
      return UserModel.findOne({ id, password })
        .then(user => {
          if (!user) {
            return cb(null, false, { message: "Incorrect email or password." });
          }
          return cb(null, user, { message: "Logged In Successfully" });
        })
        .catch(err => cb(err));
    }
  )
);
