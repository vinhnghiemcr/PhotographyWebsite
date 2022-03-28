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
    package1.service = service1._id
    await package1.save()
    package2.service = service1._id
    await package2.save()
    package3.service = service1._id
    await package3.save()

    const package4 = new Package(
        {
            name: "Basic",
            description: "Package description",
            price: 150
        }
    )
    await package4.save()

    const package5 = new Package(
        {
            name: "Advanced",
            description: "Package description",
            price: 200
        }
    )
    await package5.save()

    const package6 = new Package(
        {
            name: "Premium",
            description: "Package description",
            price: 300
        }
    )
    await package6.save()

    const picture3 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/photography-website/blob/main/images/portrait-1.jpg?raw=true",
            forSale: false
        }
    )
    await picture3.save()
    
    const picture4 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/photography-website/blob/main/images/portrait-3.jpg?raw=true",
            forSale: false
        }
    )
    await picture4.save()

    const picSale2 = new Picture(
        {   
            name: "St Mary's Glacier",
            description: "Winter 2020",
            location: "Loveland, Co",
            url: "https://github.com/vinhnghiemcr/photography-website/blob/main/images/_DSC0026.jpg?raw=true",
            forSale: true,
            price: 10
        }
    )
    await picSale2.save()

    const service2 = new Service({
        name: "Portrait",
        description: "Saving precious moments of the family",
        packages: [package4._id, package5._id, package6._id],
        pictures: [picture3._id, picture4._id]
    })
    await service2.save()
    package4.service = service2._id
    await package4.save()
    package5.service = service2._id
    await package5.save()
    package6.service = service2._id
    await package6.save()

    
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
    await review1.save()

    user1.reviews = [review1._id]
    await user1.save()

  console.log('Created database!')
}
const run = async () => {
    await Package.deleteMany()
    await Picture.deleteMany()
    await Service.deleteMany()
    await User.deleteMany()
    await Review.deleteMany()
  await main()
  db.close()
}



run()