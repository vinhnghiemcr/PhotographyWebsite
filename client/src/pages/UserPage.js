import { useNavigate } from "react-router-dom"
import Review from "../components/Review"
import Picture from "../components/Picture"
import { useEffect, useState } from "react"
import axios from "axios"
import SignUp from "../components/SignUp"

const UserPage = ({setOwned, owned, currentUser, setCurrenttUser, BASE_URL}) => {
    let navigate = useNavigate()
    const [userPictures, setUserPictures] = useState(null)
    const [review, setReview] = useState(false)
    const [edited, setEdited] = useState(false)
    const [error, setError ] = useState('')
    
    useEffect( async () => {
        await axios.get(`api/users/${currentUser._id}/pictures`)
        .then((res) => setUserPictures(res.data)  )
        .catch((e) => console.log(e))
        setOwned(true)
    }, [edited])
    const logout = () => {
        setCurrenttUser(null)
        navigate(-1)
    }

    const toggleReview = () => {
        setReview(!review)
    }

    const deleteAccount = async () => {
        await axios.delete(`api/users/${currentUser._id}`)
        .then((res) => {
            setCurrenttUser(null)
            navigate('/')
        })
        .catch((e) => console.log(e))
    }

    const editProfile = () => {
        setEdited(!edited)
        console.log(edited);
        
    }

    return (
        
        <div>
            {currentUser && 
            <div>
                <nav className="user-nav">
                    <h3>Hello, {currentUser.displayName}!</h3>
                    <div>
                        { !review && <button onClick={toggleReview}>Write A Review</button>}
                        <button onClick={editProfile}>Edit Profile</button>
                        <button onClick={logout}>Logout</button>
                        <button onClick={deleteAccount}>Delete Account</button>
                    </div>
                </nav>
                {review  && 
                <div className="review-container">
                    {review && <Review currentUser={currentUser} id={currentUser._id} setReview={setReview} BASE_URL={BASE_URL} />}
                </div>}
                {edited && 
                <div className="review-container">
                    {edited && <SignUp setCurrenttUser={setCurrenttUser} setEdited={setEdited} error={error} setError={setError} BASE_URL={BASE_URL} currentUser={currentUser}/>}
                </div>}
                <div className="user-container">
                    {userPictures && userPictures.map((picture) =>
                        <Picture 
                        owned={owned}
                        key={picture._id}
                        name={picture.name}
                        description={picture.description}
                        location={picture.location}
                        url={picture.url}
                        forSale={picture.forSale}
                        price={picture.price}
                        />
                    )}
                </div>
            </div>
            }         
        </div>
    
    )
}
export default UserPage