var app = require('./../index.js');
var dbClient = app.get('./db/client');

module.exports = {
  getClient: function(res, req, next){
    dbClient.get_client(req.params.clientlastname, function (err, client){
        res.status(200).send(client);
    });
  },


  // updateClient: fucntion(res, req, next){
  //   dbClient.update_client(function (err, job){
  //
  //   });
  // },

  getAllClients: function(res, req, next){
    dbClient.get_all_clients(function (err, clients){
        res.status(200).json(clients);
    });
  },

  createClient: function(res, req, next){
    dbClient.create_client([req.body.clientfirstname, req.body.clientlastname, req.body.clientaddress1, req.body.clientaddress2,
      req.body.clientcity, req.body.clientzipcode, req.body.clientnotes], function (err, job){
      res.status(200).send
    });
  },

  deleteClient: function(res, req, next){
    dbClient.delete_client(req.params.clientid, function (err, job){
      res.status(200).send
    });
  }
};
