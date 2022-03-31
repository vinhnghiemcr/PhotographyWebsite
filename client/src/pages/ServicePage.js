import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Package from "../components/Package"
import Picture from '../components/Picture'

const ServicePage = ({services, setCart}) => {
    const { id } = useParams()

    const [packages, setPackages] = useState([])
    const [picturesOfService, setPictureOfService] = useState([])

    useEffect(()=>{
        const service = services.filter((service) => id === service._id.toString())
        setPackages(service[0].packages)   
        setPictureOfService(service[0].pictures)     
    },[])


    return (
        <div>
            <section className="package-options">
                <div></div>
                {packages.map((p) => 
                    <Package 
                    key={p._id}
                    name={p.name} 
                    description={p.description}
                    price={p.price}
                    id={p._id}
                    setCart={setCart}
                    />
                )}
            </section>
            <section className="package-picture-container">
                {picturesOfService.map((picture) =>
                    <Picture 
                        key={picture._id}
                        name={picture.name}
                        description={picture.description}
                        location={picture.location}
                        url={picture.url}
                        forSale={picture.forSale}
                        price={picture.price}
                    />
                )}
            </section>
        </div>
    )
}
export default ServicePage