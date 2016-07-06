var Item = require('../models/item');

exports.save = function(name, callback) {
    Item.create({ name: name }, function(err, item) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, item);
    });
};

exports.list = function(callback) {
    Item.find(function(err, items) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, items);
    });
};

exports.del = function(id, callback) {
  Item.findByIdAndRemove(id, function(err, item) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, item);
  });
};

exports.update = function (id, name, callback) {
  Item.findByIdAndUpdate(id, {name: name}, function(err, item) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, item);
  });
};
