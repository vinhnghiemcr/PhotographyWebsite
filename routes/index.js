const { Router } = require('express')
const { route } = require('express/lib/application')
const controllers = require('../controllers')
const router = Router()


router.get('/', (req, res) => res.send('This is root!'))

//get all services in db
router.get('/services', controllers.getServices)

//get all package related to a paticular service id
router.get('/services/:id/packages', controllers.getPackagesByServiceId)

//get pictures by service id
router.get('/services/:id/pictures', controllers.getPictureByServiceId)

//get all picture of the collection
router.get('/collection/pictures', controllers.getCollectionPictures)

//Create a new User
router.post('/users', controllers.createUser)

//get a user by id
router.get('/user/:id')

//Create a review of a user
router.post('/user/:id/reviews')

//get all reviews of a user
router.get('/user/:id/reviews')

//get all reviews in the database
router.get('/reviews')

module.exports = router;