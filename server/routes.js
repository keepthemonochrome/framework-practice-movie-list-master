var router = require('express').Router();
var controller = require('./controllers/index')

router.get('/movies', controllers.movies.get);
router.post('/movies', controllers.movies.post);
router.get('/directors', controllers.directors.get);
router.post('/directors', controllers.directors.post);

module.exports = router;