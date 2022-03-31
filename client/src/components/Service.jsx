import { useEffect } from "react"
import { Link } from "react-router-dom"
import Picture from "./Picture"


const Service = ({id,name, description, packages, pictures}) => {

    return (
        <div className="service" >
            <div>
                <Link to={`/service/${id}`} >
                    <h3>{name}</h3>
                </Link>
            </div>
            <p>{description}</p>
            <section className="service-picture-container" >
                {pictures.map((picture) => 
                <Picture 
                    key={picture._id}
                    name={picture.name}
                    description={picture.description}
                    location={picture.location}
                    url={picture.url}
                    forSale={picture.forSale}
                    price={picture.price}
                />)}
            </section>

        </div>
    )
}
export default Service