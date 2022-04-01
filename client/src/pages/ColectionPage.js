import { useState, useEffect  } from "react"
import axios from "axios"
import Picture from "../components/Picture"
import Search from "../components/Search"

const CollectionPage = ({BASE_URL, setCart, setOwned, owned}) => {

    const [pictures, setPictures] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [searched, toggleSearched] = useState(false)

    useEffect(async () => {
        const response = await axios.get(`${BASE_URL}/collection/pictures`)
        setPictures(response.data)
        setOwned(false)
    }, [])

    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const getSearchResults = async (e) => {
        e.preventDefault()
        const response = await axios.get(`${BASE_URL}/search?search=${searchQuery}`)
        setSearchResults(response.data)
        console.log(response.data, "RESULTS")
        toggleSearched(true)
        setSearchQuery('')
    }

    return (
        <div>
            <Search value={searchQuery} onSubmit={getSearchResults} onChange={handleChange}/>
            {(searched) ? (
                <div className="search">
                    <h2>Search Results</h2>
                    <section className="search-results container-grid">
                        {(searchResults && searchResults.map((picture)=> 
                            <Picture 
                            owned={owned}
                            key={picture._doc._id}
                            name={picture._doc.name}
                            description={picture._doc.description}
                            location={picture._doc.location}
                            url={picture._doc.url}
                            forSale={picture._doc.forSale}
                            price={picture._doc.price}
                            id={picture._doc._id}
                            setCart={setCart}
                            />
                        ))}
                    </section>
                </div>
            ) : (
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
            </section>)}
        </div>
    )
}
export default CollectionPage