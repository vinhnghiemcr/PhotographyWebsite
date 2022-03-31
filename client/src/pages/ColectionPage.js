import { useState, useEffect  } from "react"
import axios from "axios"
import Picture from "../components/Picture"
import Search from "../components/Search"

const CollectionPage = ({BASE_URL, setCart, setOwned, owned}) => {

    const [pictures, setPictures] = useState([])
    const [serchResults, setSerchResults] = useState([])

    useEffect(async () => {
        const response = await axios.get(`${BASE_URL}/collection/pictures`)
        setPictures(response.data)
        setOwned(false)
    }, [])

    return (
        <div>
            <Search />
            <section className="collection-container">
                {pictures.map((picture) => 
                    <Picture 
                    owned={owned}
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
                )}
            </section>
        </div>
    )
}
export default CollectionPage