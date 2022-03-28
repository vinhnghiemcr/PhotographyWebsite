const { User, Service, Package, Picture, Review } = require('../models/index')

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

const getPictureByServiceId = async (req,res) => {
    try {
        const service = await Service.findById(req.params.id)
        console.log(service, "Service");
        
        let pictures = []
        for await (const pic of service.pictures) {
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
        console.log(users, "USERSSSSSSSSSSSSSSSSSSSS");
              
        let availableName = true
        users.forEach((u) => {
            if (u.username === user.username) {
                console.log(u.username)                
                return availableName = false
            }
        })
        
        if (availableName) {
            await user.save()
            return res.status(201).json(user)
        } else res.send(`'${user.username}' is not available. <br/> Please choose another username`)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getServices,
    getPackagesByServiceId,
    getPictureByServiceId,
    getCollectionPictures,
    createUser,
}