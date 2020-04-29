const express = require('express')

const ProductCtrl = require('../controllers/product-ctrl')

const router = express.Router()

router.post('/product', ProductCtrl.createMovie)
router.put('/product/:id', ProductCtrl.updateMovie)
router.delete('/product/:id', ProductCtrl.deleteMovie)
router.get('/product/:id', ProductCtrl.getMovieById)
router.get('/products', ProductCtrl.getMovies)

module.exports = router