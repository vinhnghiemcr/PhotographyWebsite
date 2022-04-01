import { useState } from "react"


const Picture = ({url, owned, name, description, forSale, price, location, setCart, id}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleClick = () => {
        setCart((cart) => {return {
            packages : [...cart.packages],
            pictures : [...cart.pictures, id]

        }})
    }
    return(
        <div className="picture-card" >
            { !forSale ? (
                <div className="picture">
                    <img className="small" src={url} alt="photo" onClick={handleOpen}/>
                    {isOpen && 
                    <dialog className="dialog" open onClick={handleOpen}  >
                        <img src={url} alt="zoom photo" onClick={handleOpen}  />
                    </dialog>
                    }
                </div>
            ) :
            (
                <div className="picture">
                    <img src={url} alt="collection photo" className="small" onClick={handleOpen} />
                    <h3>{name}</h3>
                    <h4>{location}</h4>
                    <p>{description}</p>
                    <h4>Price: ${price}</h4>
                    {!owned && <button onClick={handleClick}>Add</button>}
                    {isOpen && 
                    <dialog className="collection-dialog" open onClick={handleOpen} >
                        <h3>{name}</h3>
                        <h4>{location}</h4>
                        <img src={url} alt="zoom photo" onClick={handleOpen}  />
                    </dialog>
                    }
                </div>
            )
            }
        </div>
    )
}
export default Picture