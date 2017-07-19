var express = require('express');
var router = express.Router();
var passport = require('passport');

//GET /auth/login/github
router.get('/login/github',
    passport.authenticate('github'));

//GET /auth/login/github
router.get('/github/return',
    passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
        //Success Auth, redirect profile page
        res.redirect('/profile');
    });

//GET /auth/login/facebook
router.get('/login/facebook',
    passport.authenticate('facebook', {scope: ["email"]}));

//GET /auth/login/facebook
router.get('/facebook/return',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    function(req, res) {
        //Success Auth, redirect profile page
        res.redirect('/profile');
    });

//GET /auth/logout
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;