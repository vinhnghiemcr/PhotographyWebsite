


const Picture = ({url, name, description, forSale, price, location, setCart, id}) => {

    const handleClick = () => {
        setCart((cart) => {return {
            packages : [...cart.packages],
            pictures : [...cart.pictures, id]

        }})
    }
    return(
        <div >
            { !forSale ? (
                <div className="picture">
                    <img src={url} alt="photo" />
                </div>
            ) :
            (
                <div className="picture">
                    <img src={url} alt="collection photo" />
                    <h3>{name}</h3>
                    <h4>{location}</h4>
                    <p>{description}</p>
                    <h4>Price: ${price}</h4>
                    <button onClick={handleClick}>Add</button>
                </div>
            )
            }
        </div>
    )
}
export default Picture