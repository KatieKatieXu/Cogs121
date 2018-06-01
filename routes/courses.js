const express = require('express');
const router = express.Router();


/* GET course page */
router.get('/:id', function (req, res) {
    switch (req.params.id) {
        case 'cogs121':
            //res.send("the first");
            res.render('course', {name: 'COGS 121'});
            break;
        case 'cogs123':
            //res.send("the second");
            res.render('course', {name: 'COGS 123'});
            break;
        case 'cogs102c':
            //res.send("the third");
            res.render('course', {name: 'COGS 102C'});
            break;
    }
});

module.exports = router;