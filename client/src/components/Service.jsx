import Picture from "./Picture"


const Service = ({id,name, description, packages, pictures}) => {


    return (
        <div className="Service" onClick={(e) => handleClick(e, id)}>
            <h3>{name}</h3>
            <p>{description}</p>

            {pictures.map((picture) => 
            <Picture 
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