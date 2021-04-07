var orm = require('../orm');
var User = require('../models/user');

exports.create = function(req, res) {
    // TODO
    const user = mapper.map(req);
    const result = orm.create(user);
    res.send(result, user);
};

exports.read = function(req, res) {
    // TODO
    const user = orm.getById(req.id)
    res.send(user);
};

exports.update = function(req, res) {
    // TODO
    const user = orm.getById(req.id)
    _.assign(user. req.user);
    const result = orm.update(User);
    res.send(result);
};

exports.delete = function(req, res) {
    // TODO
    const result = orm.delete(req.id)
    res.send(result);
};

