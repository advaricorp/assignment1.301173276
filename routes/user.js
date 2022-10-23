//ADRIAN VARGAS
//301173276
//ASSIGNMENT 1 & 2
//OCTOBER 2022

var express = require('express');
var router = express.Router();
let userController = require('../controller/user');


//DO SIGNUP
router.get("/signup", userController.renderSignup);
router.post("/signup", userController.signup);
//DO SIGN IN
router.get("/signin", userController.renderSignin);
router.post("/signin", userController.signin);
//DO SIGN OUT
router.get("/signout", userController.signout);

module.exports = router;