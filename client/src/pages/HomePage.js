import { useEffect } from "react"
import axios from 'axios'
import Service from "../components/Service"

const HomePage = ({ services }) => {

    
    return (
        <div>
            {services.map((service) => {
                <Service id={service._id}
                name={service.name} 
                description={service.description}
                packages={service.packages}
                pictures={service.pictures}
                />
            })}
        </div>
    )
}
export default HomePage