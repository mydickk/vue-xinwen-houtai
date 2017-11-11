var MongoClient = require('mongodb').MongoClient;
var config = require('../config/db.config');

var connMongo = {

  find(opt) {
    this.conn(function(db, callback) {  
      //连接到表  
      var collection = db.collection(opt.collection);
      //查询数据
      collection.find(opt.where).toArray(function(err, result) {
        if(err){
          console.log('Error:'+ err);
          return;
        } 
        callback(result,opt.callback);
      });
    });
  },

  conn(fn) {

    MongoClient.connect(config.mongodb.url, function(err, db) {
      if(err){
        console.log('Error:'+ err);
        return;
      }
      fn(db, function(result,callback) {
        callback(result);
        db.close();
      });
    });
  }

};

module.exports = connMongo;