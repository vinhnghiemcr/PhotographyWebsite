const about_img = require('../assets/about2.jpeg')

const AboutPage = () => {

    return (
        <div className='about'>
            <img src={about_img} alt="Photographer image" className='about-img'/>
            <section>
                <h3>My Story</h3>            
                <p>I’m a software engineer & a photograper</p>
            </section> 
        </div>
    )
}
export default AboutPage