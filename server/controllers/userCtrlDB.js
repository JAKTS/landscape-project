var app = require('./../index.js');
var dbUer = app.get('./db/users');

module.exports = {
  getUser: function(res, req, next){
    dbUser.get_user(req.params.username, function (err, user){
        res.status(200).send(user);
    });
  },

  getAllUsers: function(res, req, next){
    dbUser.get_all_users(function (err, users){
        res.status(200).json(users);
    });
  },

  // updateUser: fucntion(res, req, next){
  //   dbUser.update_user(function (err, job){
  //
  //   });
  // },

  createUser: function(res, req, next){
    dbUser.create_user([req.body.username, req.body.userpass, req.body.useremail, req.body.userphone, req.body.userrole], function (err, user){
      res.status(200).send
    });
  },

  deleteUser: function(res, req, next){
    dbUser.delete_user(req.params.userid, function (err, user){
      res.status(200).send
    });
  }
};
