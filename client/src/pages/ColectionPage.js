import { useState, useEffect  } from "react"
import axios from "axios"
import Picture from "../components/Picture"
import Search from "../components/Search"

const CollectionPage = ({BASE_URL, setCart, setOwned, owned}) => {

    const [pictures, setPictures] = useState([])
    const [serchResults, setSerchResults] = useState([])
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
        const response = await axios.get(`${BASE_URL}?search=${searchQuery}`)
        setSearchResults(response)
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
                        {/* {(searchResults && searchResults.map((game, index)=> (<GameCard key ={index} name={game.name} rating={game.rating} image={game.background_image} onClick={() => props.showGame(game)}/>)))} */}
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