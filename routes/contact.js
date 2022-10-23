//ADRIAN VARGAS
//301173276
//ASSIGNMENT 1 & 2
//OCTOBER 2022

//SUMMON EXPRESS
var express = require('express');
var router = express.Router();

let contactController = require("../controller/contact");

// HELPER FUNCTION
function requireAuth(req, res, next)
{
    // CONFIRM IF THE USER IS LOGGED IN
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

//GO ANG GET TO HOME PAGE
router.get('/list', contactController.contactList);

//EDIT ROUTERS

router.get('/edit/:id', requireAuth, contactController.displayEditPage);
router.post('/edit/:id', requireAuth, contactController.processEditPage);

// //DELETE ROUTER
router.get('/delete/:id', requireAuth, contactController.performDelete);

//ADD ROUTERS
router.get("/add", requireAuth, contactController.displayAddPage);
router.post("/add", requireAuth, contactController.processAddPage);

module.exports = router;