


const Picture = ({url, name, description, forSale, price}) => {
    return(
        <div >
            { !forSale ? (
                <div className="picture">
                    <img src={url} alt="photo" />
                </div>
            ) :
            (
                <div className="picture">
                    <img src="url" alt="collection photo" />
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <h3>Price: ${price}</h3>
                </div>
            )
            }
        </div>
    )
}
export default Picture