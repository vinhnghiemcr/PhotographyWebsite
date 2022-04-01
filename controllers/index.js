const { User, Service, Package, Picture, Review , Receipt} = require('../models/index')

const getServices = async (req,res) => {
    try {
        const services = await Service.find()
        for await (const service of services){
            const packages = []
            for await (const package of service.packages){
                packages.push(await Package.findById(package))
            }
            service.packages = packages

            const pictures = []
            for await (const pic of service.pictures) {
                pictures.push(await Picture.findById(pic))
            }
            service.pictures = pictures
        }
        return res.status(200).json(services)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getPackagesByServiceId = async (req,res) => {
    try {
        const packages = await Package.find({service: req.params.id})
        return res.status(200).json(packages)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getPackages = async (req, res) => {
    try {
        const packages = await Package.find()
        return res.status(200).json(packages)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getPictureByServiceId = async (req,res) => {
    try {
        const service = await Service.findById(req.params.id)        
        let pictures = []
        for await (const pic of service.pictures) {
            pictures.push(await Picture.findById(pic))
        }
        return res.status(200).json(pictures)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getPictureByUserId = async (req,res) => {
    try {
        const user = await User.findById(req.params.id)        
        let pictures = []
        for await (const pic of user.pictures) {
            pictures.push(await Picture.findById(pic))
        }
        return res.status(200).json(pictures)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getCollectionPictures = async (req,res) => {
    try {
        const pictures = await Picture.find({forSale: true})
        return res.status(200).json(pictures)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        const users = await User.find()
        let availableName = true
        users.forEach((u) => {
            if (u.username === user.username) {
                return availableName = false
            }
        })
        if (availableName) {
            await user.save()
            return res.status(201).json(user)
        } else {
            res.status(401).send(`${user.username}' is not available. <br/> Please choose another username`)  
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const oldUser = await User.findById(id)
        const user = req.body
        let availableName = true
        console.log(user, "user");
        console.log(oldUser, "Old user");
        
        const users = await User.find()
        if (user.username !== oldUser.username) {
            users.forEach((u) => {
                if (u.username === user.username) {
                    return availableName = false
                }
            })
        }
        if (availableName) {
            const newUser = await User.findByIdAndUpdate(id, {...user})
            return res.status(201).json(newUser)
        } else {
            res.status(401).send(`${user.username}' is not available. <br/> Please choose another username`)  
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getUsers = async (req,res) => {
    try {
        const { username } = req.query
        if ( username) {
            const user = await User.find({username: username})
            return res.status(200).json(user)
        } else {
            const users = await User.find()
            return res.status(200).json(users)
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const verifyUser = async (req, res) => {
    try {
        const { username, password } = req.body             
        const user = await User.findOne({username: username})
        if (user) {
            if (password === user.password){
                return res.status(200).json(user)
            } else {
                return res.send(`Username and password are not matched!`)
            }
        } else {
            return res.send(`${username} is not registed!`)
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}




const getUserById = async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateUserReceipts = async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        const receipt = await new Receipt(req.body)
        if (receipt) {
            if (user.receipts ) {
                user.receipts = [...user.receipts, receipt._id]
            } else {
                user.receipts = [ receipt._id]
            }
            //add pictures to user DB
            const pictures = receipt.items.data.filter((item) => item.forSale)
            if (pictures) {
                pictures.forEach((pic) =>{
                    if (!user.pictures.includes(pic._id.toString())) {
                        user.pictures.push(pic)
                    }
                }
                )                
            }
            await receipt.save()
            await user.save()
            return res.status(200).json(user.pictures)
        }
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteUserById = async (req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        return res.status(200).send(true)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createReview = async (req,res) => {
    try {
        const review = new Review(req.body)
        const user = await User.findById(req.params.id)
        await User.findByIdAndUpdate(req.params.id, {reviews: [...user.reviews, review._id]})
        await review.save()
        return res.status(200).json(review)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteReview = async (req,res) => {
    try {
        const { id, rid } = req.params        
        const user = await User.findById(id)
        const newReviews = user.reviews.filter((r) => r._id.toString() !== rid)
        user.reviews = newReviews
        await user.save()
        await Review.findByIdAndDelete(rid)
        return res.status(200).send(true)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const getReviewByUserId = async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        const reviews = []
        for await (const review of user.reviews) {
            reviews.push(await Review.findById(review))
        }
        return res.status(200).json(reviews)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateReview = async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        const reviews = []
        for await (const review of user.reviews) {
            reviews.push(await Review.findById(review))
        }
        return res.status(200).json(reviews)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const gettAllReviews = async (req,res) => {
    try {
        const reviews = await Review.find()
        return res.status(200).json(reviews)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const createReceipt = async (req,res) => {
    try {
        const receipt = await new Receipt(req.body)
        await receipt.save()
        return res.status(200).json(receipt)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const search = async (req,res) => {
    try {
        const { search } = req.query
        const pictures = await Picture.find({forSale: true})
        const searchQueries = search.toLowerCase().split(" ")
        const names = pictures.map((pic) => pic.name.toLowerCase().split(" "))        
        const score = names.map((name) => {
            let grade = 0
            searchQueries.forEach((word) => {
                if ( name.includes(word)) {
                    grade += 100/searchQueries.length
                }
            })
            return grade
        })
        let results = pictures.map((pic, index) => {return {...pic, score: score[index]}})
        results = results.filter((result) => result.score > 50)
        return res.status(200).json(results)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getServices,
    getPackagesByServiceId,
    getPackages,
    getPictureByServiceId,
    getPictureByUserId,
    getCollectionPictures,
    createUser,
    updateUser,
    getUsers,
    getUserById,
    updateUserReceipts,
    deleteUserById,
    verifyUser,
    createReview,
    deleteReview,
    getReviewByUserId,
    updateReview,
    gettAllReviews,
    createReceipt,
    search
}