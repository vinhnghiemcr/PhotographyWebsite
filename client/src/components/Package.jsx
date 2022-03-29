

const Package = ({name, description, price, id, setCart}) => {

    const handleClick = () => {
        setCart((cart) => cart + 1)
    }

    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>${price}</h4>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}
export default Package