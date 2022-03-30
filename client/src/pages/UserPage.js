import { useNavigate } from "react-router-dom"

const UserPage = ({cart, currentUser, setCurrenttUser}) => {
    let navigate = useNavigate()

    const logout = () => {
        setCurrenttUser(null)
        navigate(-1)
    }

    return (
        <div>
            {`Hello, ${currentUser.displayName}!`}<br />
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default UserPage