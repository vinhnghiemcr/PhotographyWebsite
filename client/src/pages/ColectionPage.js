import { useState, useEffect  } from "react"
import axios from "axios"
import Picture from "../components/Picture"

const CollectionPage = ({BASE_URL}) => {

    const [pictures, setPictures] = useState([])

    useEffect(async () => {
        const response = await axios.get(`${BASE_URL}/collection/pictures`)
        console.log(response.data, "PICTURE");
        
        setPictures(response.data)
    }, [])

    return (
        <div>
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
export default CollectionPage