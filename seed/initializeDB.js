const db = require('../db')
const { Package, Picture, Review, Service, User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    

    const package1 = new Package(
        {
            name: "Basic",
            description: "Package description",
            price: 150
        }
    )
    await package1.save()

    const package2 = new Package(
        {
            name: "Advanced",
            description: "Package description",
            price: 200
        }
    )
    await package2.save()

    const package3 = new Package(
        {
            name: "Premium",
            description: "Package description",
            price: 300
        }
    )
    await package3.save()
    const picture1 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/photography-website/blob/main/images/fam-1.jpg?raw=true",
            forSale: false
        }
    )
    await picture1.save()
    
    const picture2 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/photography-website/blob/main/images/fam-2.jpg?raw=true",
            forSale: false
        }
    )
    await picture2.save()

    const picSale1 = new Picture(
        {   
            name: "Niagara Falls",
            description: "Spring 2018",
            location: "Buffalo, NY",
            url: "https://github.com/vinhnghiemcr/photography-website/blob/main/images/avatar-bg.jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await picSale1.save()

    const service1 = new Service({
        name: "Family",
        description: "Saving precious moments of the family",
        packages: [package1._id, package2._id, package3._id],
        pictures: [picture1._id, picture2._id]
    })
    await service1.save()

    
    const user1 = new User(
        {
            username: "nghiem",
            password: "nghiem",
            displayName: "Nghiem",
            email: "vinhnghiemcr@gmail.com",
            loginCount: 0,
            pictures: [picSale1._id],

        }
    )
    await user1.save()

    const review1 = new Review(
        {
            name: "Truong",
            description: "Beutifull Pictures",
            user: user1._id
        }
    )
    review1.save()

    user1.reviews = [review1._id]
    user1.save()

  console.log('Created database!')
}
const run = async () => {
    await Package.deleteMany()
    await Picture.deleteMany()
    await Service.deleteMany()
  await main()
  db.close()
}



run()