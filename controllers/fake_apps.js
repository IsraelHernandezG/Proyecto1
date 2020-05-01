const path = require('path');
const App = require('../models/fake_apps');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/fake_apps.html'));
};

exports.create = function (req, res) {
    var newApp = new App(req.body);
    console.log(req.body);
    newApp.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save document to database');
        } else {
            res.redirect('/fake_apps/getapps');
        }
  });
};

exports.list = function (req, res) {
        App.find({}).exec(function (err, app) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getapps', {
                        apps: apps
             });
        });
};
