import { useState, useEffect  } from "react"
import axios from "axios"
import Picture from "../components/Picture"
import Search from "../components/Search"

const CollectionPage = ({BASE_URL, setCart}) => {

    const [pictures, setPictures] = useState([])
    const [serchResults, setSerchResults] = useState([])

    useEffect(async () => {
        const response = await axios.get(`${BASE_URL}/collection/pictures`)
        setPictures(response.data)
    }, [])

    return (
        <div>
            <Search />
            {pictures.map((picture) => 
                <div>
                    <Picture 
                    key={picture._id}
                    name={picture.name}
                    description={picture.description}
                    location={picture.location}
                    url={picture.url}
                    forSale={picture.forSale}
                    price={picture.price}
                    id={picture._id}
                    setCart={setCart}
                    />
                </div>
            )}
        </div>
    )
}
export default CollectionPage