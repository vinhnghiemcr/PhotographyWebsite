
import axios from "axios"
import { useEffect, useState } from "react"
import Service from "../components/Service"


const HomePage = ({ services , BASE_URL}) => {
    const [reviewBody, setReviewBody] = useState('')
    const [name, setName] = useState('')
    let index = 0

    useEffect( async () => {
        const res = await axios.get(`${BASE_URL}/reviews`) 
        
        const interval = setInterval(() => {
             setReviewBody(res.data[index].description)
             setName(res.data[index].name )
            if (index >= res.data.length) {
                index = 0
            } else index++

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