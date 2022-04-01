const about_img = require('../assets/about2.jpeg')

const AboutPage = () => {

    return (
        <div className='about'>
            <img src={about_img} alt="Photographer image" className='about-img'/>
            <section>
                <h3>My Story</h3>            
                <p>I’m a software engineer & a photograper</p>
                <br />
                <p>A photography app for the ages. Dive in and add photos to your cart. The different categories allow you to develop a curated collection of pieces that will brighten up your home.</p>
                <br />
                <p>This app was created with photographers in mind as a way to sell their artwork through the digital realm. Checkout their work and possibly scope out your next travel destination on this app.</p>
            </section> 
        </div>
    )
}
export default AboutPage