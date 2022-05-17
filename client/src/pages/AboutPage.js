const about_img = require('../assets/about2.jpeg')

const AboutPage = () => {

    return (
        <div className='about'>
            <img src={about_img} alt="Photographer image" className='about-img'/>
            <section>
                {/* <h3>My Story</h3>             */}
                <p>Howdy, </p>
                <p>I’m Nghiem Truong - the photographer & software engineer!</p>
                <br />
                <p>Nghiem Truong Photography is a website for the ages. It was created with photographers in mind and allows me to capture my view of the world through the digital relm.  The site allows you explore my vision through a curated library, add artwork to the cart and purchase the piece.</p>
                <br />
                <p>Hopefully after browsing through the website, you may be able to brighten up your house with a few pieces or be inspired in your next travel destination</p>
            </section> 
        </div>
    )
}
export default AboutPage