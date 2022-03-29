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

//Get all users
router.get('/users', controllers.getUsers)

//get a user by id
router.get('/users/:id', controllers.getUserById)

//Create a review of a user
router.post('/users/:id/reviews', controllers.createReview)

//get all reviews of a user
router.get('/users/:id/reviews', controllers.getReviewByUserId)

//update a review
router.put('/users/:id/reviews', controllers.updateReview)

//get all reviews in the database
router.get('/reviews', controllers.gettAllReviews)

module.exports = router;