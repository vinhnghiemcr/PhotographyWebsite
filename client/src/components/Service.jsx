import { useEffect } from "react"
import Picture from "./Picture"


const Service = ({id,name, description, packages, pictures}) => {

    useEffect(()=>{
        console.log(name, description, "SERVICE COMPONENT")
    },[])

   

    return (
        <div className="Service" >
            hello
            <h3>{name}</h3>
            <p>{description}</p>

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

        </div>
    )
}
export default Service