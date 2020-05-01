const express = require('express');
const router = express.Router();
const shark = require('../controllers/fake_apps');

router.get('/', function(req, res){
    shark.index(req,res);
});

router.post('/addapp', function(req, res) {
    shark.create(req,res);
});

router.get('/getapps', function(req, res) {
    shark.list(req,res);
});

module.exports = router;
