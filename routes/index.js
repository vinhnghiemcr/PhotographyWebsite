const { Router } = require('express')
const { route } = require('express/lib/application')
const controllers = require('../controllers')
const router = Router()


router.get('/', (req, res) => res.send('This is root!'))

//search query
router.get('/search', controllers.search)

//get all services in db
router.get('/services', controllers.getServices)

//get all packages related to a paticular service id
router.get('/services/:id/packages', controllers.getPackagesByServiceId)

//get all packages 
router.get('/packages', controllers.getPackages)

//get pictures by service id
router.get('/services/:id/pictures', controllers.getPictureByServiceId)

//get pictures by user id
router.get('/users/:id/pictures', controllers.getPictureByUserId)

//get all picture of the collection
router.get('/collection/pictures', controllers.getCollectionPictures)

//Create a new User
router.post('/users', controllers.createUser)

//Get all users
router.get('/users', controllers.getUsers)

//Verify a user
router.post('/users/verify', controllers.verifyUser)

//get a user by id
router.get('/users/:id', controllers.getUserById)

//Update user's info
router.put('/users/:id/', controllers.updateUser)

//Update user's receipts
router.put('/users/:id/receipts', controllers.updateUserReceipts)

//get a user by id
router.delete('/users/:id', controllers.deleteUserById)

//Create a review of a user
router.post('/users/:id/reviews', controllers.createReview)

//Delete a review of a user
router.delete('/users/:id/reviews/:rid', controllers.deleteReview)

//get all reviews of a user
router.get('/users/:id/reviews', controllers.getReviewByUserId)

//update a review
router.put('/users/:id/reviews', controllers.updateReview)

//get all reviews in the database
router.get('/reviews', controllers.gettAllReviews)

//Create a review of a user
router.post('/receipts', controllers.createReceipt)

module.exports = router;