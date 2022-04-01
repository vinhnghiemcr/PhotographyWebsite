const db = require('../db')
const { Package, Picture, Review, Service, User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const package1 = new Package(
        {
            name: "Family Basic",
            description: "1 Hour - 20 Photos",
            price: 100
        }
    )
    await package1.save()

    const package2 = new Package(
        {
            name: "Family Advanced",
            description: "2 Hours - 40 Photos",
            price: 200
        }
    )
    await package2.save()

    const package3 = new Package(
        {
            name: "Family Premium",
            description: "4 Hours - 100 Photos",
            price: 300
        }
    )
    await package3.save()

    const f1 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/family/FH1.jpg?raw=true",
            forSale: false
        }
    )
    await f1.save()
    
    const f2 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/family/FH2.jpg?raw=true",
            forSale: false
        }
    )
    await f2.save()

    const f3 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/family/FH3.jpg?raw=true",
            forSale: false
        }
    )
    await f3.save()
    
    const f4 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/family/FH4.jpg?raw=true",
            forSale: false
        }
    )
    await f4.save()

    const f5 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/family/FH5.jpg?raw=true",
            forSale: false
        }
    )
    await f5.save()
    
    const f6 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/family/FH6.jpg?raw=true",
            forSale: false
        }
    )
    await f6.save()

    const f7 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/family/FH7.jpg?raw=true",
            forSale: false
        }
    )
    await f7.save()
    
    const f8 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/family/FH8.jpg?raw=true",
            forSale: false
        }
    )
    await f8.save()

    const f9 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/family/FH9.jpg?raw=true",
            forSale: false
        }
    )
    await f9.save()
    
    const f10 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/family/FH10.jpg?raw=true",
            forSale: false
        }
    )
    await f10.save()
    const f11 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/family/FV1.jpg?raw=true",
            forSale: false
        }
    )
    await f11.save()
    
    const f12 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/family/FV2.jpg?raw=true",
            forSale: false
        }
    )
    await f12.save()

    const service1 = new Service({
        name: "Family",
        description: "Saving precious moments of the family",
        packages: [package1._id, package2._id, package3._id],
        pictures: [f1._id, f2._id, f3._id, f4._id, f5._id, f6._id, f7._id, f8._id, f9._id, f10._id, f11._id, f12._id]
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
            name: "Portrait Basic",
            description: "1 Hour - 20 Photos",
            price: 100
        }
    )
    await package4.save()

    const package5 = new Package(
        {
            name: "Portrait Advanced",
            description: "2 Hours - 40 Photos",
            price: 200
        }
    )
    await package5.save()

    const package6 = new Package(
        {
            name: "Portrait Premium",
            description: "4 Hours - 100 Photos",
            price: 300
        }
    )
    await package6.save()

    const p1 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PH1.jpg?raw=true",
            forSale: false
        }
    )
    await p1.save()
    
    const p2 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PH2.jpg?raw=true",
            forSale: false
        }
    )
    await p2.save()

    const p3 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PH3.jpg?raw=true",
            forSale: false
        }
    )
    await p3.save()
    
    const p4 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PH4.jpg?raw=true",
            forSale: false
        }
    )
    await p4.save()

    const p5 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PH5.jpg?raw=true",
            forSale: false
        }
    )
    await p5.save()
    
    const p6 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PH6.jpg?raw=true",
            forSale: false
        }
    )
    await p6.save()

    const p7 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PH7.jpg?raw=true",
            forSale: false
        }
    )
    await p7.save()
    
    const p8 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PH8.jpg?raw=true",
            forSale: false
        }
    )
    await p8.save()

    const p9 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PH9.jpg?raw=true",
            forSale: false
        }
    )
    await p9.save()
    
    const p10 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PH10.jpg?raw=true",
            forSale: false
        }
    )
    await p10.save()

    const p11 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PH11.jpg?raw=true",
            forSale: false
        }
    )
    await p11.save()

    const p12 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PH12.jpg?raw=true",
            forSale: false
        }
    )
    await p12.save()

    const p13 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PV1.jpg?raw=true",
            forSale: false
        }
    )
    await p13.save()

    const p14 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PV2.jpg?raw=true",
            forSale: false
        }
    )
    await p14.save()

    const p15 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PV3.jpg?raw=true",
            forSale: false
        }
    )
    await p15.save()

    const p16 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PV4.jpg?raw=true",
            forSale: false
        }
    )
    await p16.save()

    const p17 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PV5.jpg?raw=true",
            forSale: false
        }
    )
    await p17.save()

    const p18 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PV6.jpg?raw=true",
            forSale: false
        }
    )
    await p18.save()

    const p19 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PV7.jpg?raw=true",
            forSale: false
        }
    )
    await p19.save()

    const p20 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PV8.jpg?raw=true",
            forSale: false
        }
    )
    await p20.save()

    const p21 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PV9.jpg?raw=true",
            forSale: false
        }
    )
    await p21.save()

    const p22 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PV10.jpg?raw=true",
            forSale: false
        }
    )
    await p22.save()

    const p23 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PV11.jpg?raw=true",
            forSale: false
        }
    )
    await p23.save()

    const p24 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PV12.jpg?raw=true",
            forSale: false
        }
    )
    await p24.save()

    const p25 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/portrait/PV13.jpg?raw=true",
            forSale: false
        }
    )
    await p25.save()

    const service2 = new Service({
        name: "Portrait",
        description: "A picture is worth a thousand words!",
        packages: [package4._id, package5._id, package6._id],
        pictures: [p1._id, p2._id, p3._id, p4._id, p5._id, p6._id, p7._id, p8._id, p9._id, p10._id, p11._id, p12._id, p13._id, p14._id, p15._id, p16._id, p17._id, p18._id, p19._id, p20._id, p21._id, p22._id, p23._id, p24._id, p25._id]
    })
    await service2.save()
    package4.service = service2._id
    await package4.save()
    package5.service = service2._id
    await package5.save()
    package6.service = service2._id
    await package6.save()

    const package7 = new Package(
        {
            name: "Graduation Basic",
            description: "1 Hour - 20 Photos",
            price: 100
        }
    )
    await package7.save()

    const package8 = new Package(
        {
            name: "Graduation Advanced",
            description: "2 Hours - 40 Photos",
            price: 200
        }
    )
    await package8.save()

    const package9 = new Package(
        {
            name: "Graduation Premium",
            description: "4 Hours - 100 Photos",
            price: 300
        }
    )
    await package9.save()

    const g1 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/graduation/GH1.jpg?raw=true",
            forSale: false
        }
    )
    await g1.save()
    
    const g2 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/graduation/GH2.jpg?raw=true",
            forSale: false
        }
    )
    await g2.save()

    const g3 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/graduation/GH3.jpg?raw=true",
            forSale: false
        }
    )
    await g3.save()
    
    const g4 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/graduation/GH4.jpg?raw=true",
            forSale: false
        }
    )
    await g4.save()

    const g5 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/graduation/GV1.jpg?raw=true",
            forSale: false
        }
    )
    await g5.save()
    
    const g6 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/graduation/GV2.jpg?raw=true",
            forSale: false
        }
    )
    await g6.save()

    const g7 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/graduation/GV3.jpg?raw=true",
            forSale: false
        }
    )
    await g7.save()
    
    const g8 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/graduation/GV4.jpg?raw=true",
            forSale: false
        }
    )
    await g8.save()

    const g9 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/graduation/GV5.jpg?raw=true",
            forSale: false
        }
    )
    await g9.save()
    
    const g10 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/graduation/GV6.jpg?raw=true",
            forSale: false
        }
    )
    await g10.save()

    const service3 = new Service({
        name: "Graduation",
        description: "Be bold, be courageous, be your best!",
        packages: [package7._id, package8._id, package9._id],
        pictures: [g1._id, g2._id, g3._id, g4._id, g5._id, g6._id, g7._id, g8._id, g9._id, g10._id]
    })
    await service3.save()
    package7.service = service3._id
    await package7.save()
    package8.service = service3._id
    await package8.save()
    package9.service = service3._id
    await package9.save()

    const package10 = new Package(
        {
            name: "Newborn Basic",
            description: "1 Hour - 20 Photos",
            price: 100
        }
    )
    await package10.save()

    const package11 = new Package(
        {
            name: "Newborn Advanced",
            description: "2 Hours - 40 Photos",
            price: 200
        }
    )
    await package11.save()

    const package12 = new Package(
        {
            name: "Newborn Premium",
            description: "4 Hours - 100 Photos",
            price: 300
        }
    )
    await package12.save()

    const n1 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/newborn/NH1.jpg?raw=true",
            forSale: false
        }
    )
    await n1.save()
    
    const n2 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/newborn/NH2.jpg?raw=true",
            forSale: false
        }
    )
    await n2.save()

    const n3 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/newborn/NH3.jpg?raw=true",
            forSale: false
        }
    )
    await n3.save()
    
    const n4 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/newborn/NH4.jpg?raw=true",
            forSale: false
        }
    )
    await n4.save()

    const n5 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/newborn/NH5.jpg?raw=true",
            forSale: false
        }
    )
    await n5.save()
    
    const n6 = new Picture(
        {
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/newborn/NH6.jpg?raw=true",
            forSale: false
        }
    )
    await n6.save()

    const service4 = new Service({
        name: "Newborn",
        description: "With every newborn baby, a little sun rises!",
        packages: [package10._id, package11._id, package12._id],
        pictures: [n1._id, n2._id, n3._id, n4._id, n5._id, n6._id]
    })
    await service4.save()
    package10.service = service4._id
    await package10.save()
    package11.service = service4._id
    await package11.save()
    package12.service = service4._id
    await package12.save()

    const c1 = new Picture(
        {   
            name: "Lanikai Beach ",
            description: "Jan 2021",
            location: "Oahu, HI",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(1).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c1.save()

    const c2 = new Picture(
        {   
            name: "Ho'omaluhia Botanical Garden",
            description: "Jan 2021",
            location: "Oahu, HI",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(2).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c2.save()

    const c3 = new Picture(
        {   
            name: "Boston Public Library",
            description: "May 2018",
            location: "Boston, MA",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(3).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c3.save()

    const c4 = new Picture(
        {   
            name: "Light House",
            description: "March 2019",
            location: "Lubbock, TX",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(4).jpg?raw=true",
            forSale: true,
            price: 10
        }
    )
    await c4.save()

    const c5 = new Picture(
        {   
            name: "911 Memorial",
            description: "March 2018",
            location: "New York, NY",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(5).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c5.save()

    const c6 = new Picture(
        {   
            name: "Brooklyn Bridge",
            description: "March 2018",
            location: "New York, NY",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(6).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c6.save()

    const c7 = new Picture(
        {   
            name: "Lone New Yorker",
            description: "March 2018",
            location: "New York, NY",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(7).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c7.save()

    const c8 = new Picture(
        {   
            name: "New York by Night",
            description: "March 2018",
            location: "New York, NY",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(8).jpg?raw=true",
            forSale: true,
            price: 10
        }
    )
    await c8.save()

    const c9 = new Picture(
        {   
            name: "Brooklyn Bridge by Night",
            description: "March 2018",
            location: "New York, NY",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(9).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c9.save()

    const c10 = new Picture(
        {   
            name: "Brooklyn Bridge Black & White",
            description: "March 2018",
            location: "New York, NY",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(10).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c10.save()

    const c11 = new Picture(
        {   
            name: "Statue of Liberty",
            description: "March 2018",
            location: "New York, NY",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(11).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c11.save()

    const c12 = new Picture(
        {   
            name: "Empire State Building",
            description: "March 2018",
            location: "New York, NY",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(12).jpg?raw=true",
            forSale: true,
            price: 10
        }
    )
    await c12.save()

    const c13 = new Picture(
        {   
            name: "Niagara Falls",
            description: "May 2017",
            location: "Buffalo, NY",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(13).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c13.save()

    const c14 = new Picture(
        {   
            name: "Niagara Falls from Bridge",
            description: "May 2017",
            location: "New York, NY",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(14).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c14.save()

    const c15 = new Picture(
        {   
            name: "Windmill Farm",
            description: "April 2019",
            location: "Sweetwaater, TX",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(15).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c15.save()

    const c16 = new Picture(
        {   
            name: "Windmill",
            description: "April 2019",
            location: "Sweetwater, TX",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(16).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c16.save()

    const c17 = new Picture(
        {   
            name: "Garden of Gods",
            description: "Nov 2020",
            location: "Colorado Springs, CO",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(17).jpg?raw=true",
            forSale: true,
            price: 10
        }
    )
    await c17.save()

    const c18 = new Picture(
        {   
            name: "Sand Beach",
            description: "Jan 2021",
            location: "Oahu, HI",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(18).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c18.save()

    const c19 = new Picture(
        {   
            name: "Beach of Love",
            description: "Aug 2019",
            location: "Alamogordo, NM",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(19).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c19.save()

    const c20 = new Picture(
        {   
            name: "Gate of Heaven",
            description: "Aug 2019",
            location: "Alamogordo, NM",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(20).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c20.save()

    const c21 = new Picture(
        {   
            name: "White Sand",
            description: "Aug 2019",
            location: "Alamogordo, NM",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(21).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c21.save()

    const c22 = new Picture(
        {   
            name: "Nature",
            description: "Aug 2019",
            location: "Alamogordo, NM",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(22).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c22.save()

    const c23 = new Picture(
        {   
            name: "Top of Honolulu",
            description: "Jan 2021",
            location: "Honolulu, HI",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(23).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c23.save()

    const c24 = new Picture(
        {   
            name: "Spring Rider",
            description: "March 2019",
            location: "Lubbock, TX",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(24).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c24.save()

    const c25 = new Picture(
        {   
            name: "Texas Teach University in Spring",
            description: "March 2019",
            location: "Lubbock, TX",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(25).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c25.save()

    const c26 = new Picture(
        {   
            name: "Texas Teach University Campus",
            description: "March 2019",
            location: "Lubbock, TX",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(26).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c26.save()

    const c27 = new Picture(
        {   
            name: "Spring on Campus",
            description: "March 2019",
            location: "Lubbock, TX",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(27).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c27.save()

    const c28 = new Picture(
        {   
            name: "Winter Is Coming",
            description: "March 2019",
            location: "Lubbock, TX",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(28).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c28.save()

    const c29 = new Picture(
        {   
            name: "Winter Rider",
            description: "March 2019",
            location: "Lubbock, TX",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(29).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c29.save()

    const c30 = new Picture(
        {   
            name: "Hanauma Bay",
            description: "Jan 2021",
            location: "Honolulu, HI",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(30).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c30.save()

    const c31 = new Picture(
        {   
            name: "Moutain View",
            description: "Jan 2021",
            location: "Honolulu, HI",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(31).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c31.save()

    const c32 = new Picture(
        {   
            name: "Wonderland",
            description: "Nov 2021",
            location: "Lubbock, TX",
            url: "https://github.com/vinhnghiemcr/PhotographyWebsite/blob/main/client/src/assets/images/collection/c1%20(32).jpg?raw=true",
            forSale: true,
            price: 5
        }
    )
    await c32.save()

    
    const user1 = new User(
        {
            username: "nghiem",
            password: "nghiem",
            displayName: "Nghiem",
            email: "vinhnghiemcr@gmail.com",
            loginCount: 0,
            pictures: [c1._id, c25._id, c4._id, c13._id],

        }
    )
    await user1.save()
    const user2 = new User(
        {
            username: "nick",
            password: "nick",
            displayName: "Nick",
            email: "nick@gmail.com",
            loginCount: 0,
            pictures: [c12._id, c17._id, c32._id],

        }
    )
    await user2.save()
    const user3 = new User(
        {
            username: "jenna",
            password: "jenna",
            displayName: "Jenna",
            email: "jenna@gmail.com",
            loginCount: 0,
            pictures: [c4._id, c8._id, c30._id],

        }
    )
    await user3.save()
    const user4 = new User(
        {
            username: "molly",
            password: "molly",
            displayName: "Molly",
            email: "molly@gmail.com",
            loginCount: 0,
            pictures: [c15._id, c18._id, c30._id],

        }
    )
    await user4.save()

    const review1 = new Review(
        {
            name: "Jenna",
            description: "Beautifull Pictures",
            rating: 5,
            user: user2._id
        }
    )
    await review1.save()
    user2.reviews = [review1._id]
    await user1.save()

    const review2 = new Review(
        {
            name: "Jenna",
            description: "The photographs capture the subjects with incredible detail.",
            rating: 5,
            user: user2._id
        }
    )
    await review2.save()
    user2.reviews = [review2._id]
    await user2.save()

    const review3 = new Review(
        {
            name: "Molly",
            description: "You can feel the depth of emotions that range from happiness to sadness.",
            rating: 5,
            user: user4._id
        }
    )
    await review3.save()
    user4.reviews = [review3._id]
    await user4.save()

    const review4 = new Review(
        {
            name: "Nick",
            description: "I love the landscape photos",
            rating: 5,
            user: user2._id
        }
    )
    await review4.save()
    user2.reviews = [review4._id]
    await user2.save()

    const review5 = new Review(
        {
            name: "Nick",
            description: "What breathtaking views!",
            rating: 5,
            user: user2._id
        }
    )
    await review5.save()
    user2.reviews = [review5._id]
    await user2.save()

    const review6 = new Review(
        {
            name: "Jenna",
            description: "Is this a trick of the camera or natural lighting?",
            rating: 5,
            user: user3._id
        }
    )
    await review6.save()
    user3.reviews = [review6._id]
    await user3.save()

    const review7 = new Review(
        {
            name: "Canh",
            description: "These photos afford great scope for the imagination!",
            rating: 5,
            user: user1._id
        }
    )
    await review7.save()
    user1.reviews = [review7._id]
    await user1.save()

    const review8 = new Review(
        {
            name: "Michael",
            description: "I missed Lubbockkkkkkkkkkkk",
            rating: 5,
            user: user1._id
        }
    )
    await review8.save()
    user1.reviews = [review8._id]
    await user1.save()

    const review9 = new Review(
        {
            name: "Chinwendu",
            description: "I feel inspired to travel to the mountains of Hawaii now.",
            rating: 5,
            user: user1._id
        }
    )
    await review9.save()
    user1.reviews = [review9._id]
    await user1.save()

    const review10 = new Review(
        {
            name: "Patrick",
            description: "Expert technique!",
            rating: 5,
            user: user1._id
        }
    )
    await review10.save()
    user1.reviews = [review9._id]
    await user1.save()

    const review11 = new Review(
        {
            name: "Mark",
            description: "These photos afford great scope for the imagination!",
            rating: 5,
            user: user1._id
        }
    )
    await review11.save()
    user1.reviews = [review9._id]
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