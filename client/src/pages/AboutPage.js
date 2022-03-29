const about_img = require('../assets/about1.jpg')

const AboutPage = () => {

    return (
        <div>
            <img src={about_img} alt="Photographer image" className='about-img'/>
            <h3>My Story</h3>
            
            <p>I’m a software engineer & a photograper</p>
            
        </div>
    )
}
export default AboutPage