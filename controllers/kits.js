const { Router } = require('express')
const express = require('express')
const router = express.Router()
const Kit = require('../models/kit')
const kitSeed = require('../models/kitSeed')




// === SEED DATA === //
router.get('/seed', (req, res) => {
    Kit.deleteMany({}, (error, allKits) => { })
    Kit.create(kitSeed, (error, data) => {
        res.redirect('/kits')
    })
})


// === ROUTES === //
router.get('/', (req, res) => {
    Kit.find({}, (error, allKits) => {
        res.render('index.ejs', {
            kits: allKits,
        });
    });
});



module.exports = router;