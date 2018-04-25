const express = require('express');
const router = express.Router();

/* GET course page */
router.get('/:id', function (req, res) {
    switch (req.params.id) {
        case 'cogs121':
            res.render('course', {name: 'COGS 121'});
            break;
        case 'cogs123':
            res.render('course', {name: 'COGS 123'});
            break;
        case 'cogs102c':
            res.render('course', {name: 'COGS 102C'});
            break;
    }
});

module.exports = router;