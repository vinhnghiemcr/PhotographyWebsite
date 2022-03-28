const { User, Service, Package, Picture, Review } = require('../models/index')

const getServices = async (req,res) => {
    try {
        const services = await Service.find()
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

module.exports = {
    getServices,
    getPackagesByServiceId,
}