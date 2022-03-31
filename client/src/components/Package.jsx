

const Package = ({name, description, price, id, setCart}) => {

    const handleClick = () => {
        setCart((cart) => {return {
            packages : [...cart.packages, id],
            pictures : [...cart.pictures]

        }})
    }

    return (
        <div className="package">
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>${price}</h4>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}
export default Package