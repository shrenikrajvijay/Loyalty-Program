/**
 * Created by Suchishree Jena on 11/7/2017.
 */

var express = require('express');
var router = express.Router();
var assert = require('assert');
var Customer = require('../models/customer');

/* GET home page. */
router.get('/',function (req,res) {
    res.render('index');
});
router.get('/getData/',function (req,res,next) {

        Customer.find(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        })
});

router.post('/postData/',function (req,res) {
    var customerData = new Customer({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email
    });
    customerData.save(function (err,result) {
       if(err){
           res.json({msg: 'Failed to add Customer details'});
           console.log(err);
       }
       else{
           res.json({msg: 'Customer details saved successfully'});
           console.log(result);
       }
    });
});

router.post('/updatedata', function(req, res) {

    var url = 'mongodb://localhost:27017/cmpe280';
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected to MongoDb server.");
        db.close();
    });
});

router.get('/deleteData/:id', function(req, res) {

    Customer.remove({_id: req.params.id}, function (err,result) {
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;
