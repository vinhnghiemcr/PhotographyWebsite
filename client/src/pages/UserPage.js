import { useNavigate } from "react-router-dom"
import Review from "../components/Review"

const UserPage = ({cart, currentUser, setCurrenttUser, BASE_URL}) => {
    let navigate = useNavigate()

    const logout = () => {
        setCurrenttUser(null)
        navigate(-1)
    }

    return (
        <div>
            {`Hello, ${currentUser.displayName}!`}<br />
            <Review id={currentUser._id} BASE_URL={BASE_URL} />
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default UserPage