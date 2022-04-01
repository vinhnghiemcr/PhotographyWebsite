
import axios from "axios"
import { useEffect, useState } from "react"
import Service from "../components/Service"


const HomePage = ({ services , BASE_URL}) => {
    const [reviewBody, setReviewBody] = useState('')
    const [name, setName] = useState('')
    let index = 0

    useEffect( async () => {
        const res = await axios.get(`api/reviews`)        
        
        const interval = setInterval(() => {
            index = Math.floor(Math.random()* res.data.length)
             setReviewBody(res.data[index].description)
             setName(res.data[index].name )
        } , 5000)
        return () => clearInterval(interval)
    },[])

    
    return (
        <div className="service-container">
            {
            services.map((service) => 
            <Service key={service._id} id={service._id}
                name={service.name} 
                description={service.description}
                packages={service.packages}
                pictures={service.pictures}
                />
            )}
            <footer >
                {reviewBody && <h5>"{reviewBody}"</h5>}
                {name && <h4>{`__ ${name} __`}</h4>}
            </footer>
        </div>
    )
}
export default HomePage