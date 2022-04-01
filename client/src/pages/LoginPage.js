import { useEffect, useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const LoginPage = ({BASE_URL, setCurrenttUser, currentUser}) => {
    
    let navigate = useNavigate()
    const [isSignUp, setIsSignUp] = useState(false)
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    useEffect(() => {
        setIsSignUp(false)
    }, [])
    const [error, setError ] = useState('')
    
    const handleChange = (e) => {  
        setUser({...user,  [e.target.name]: e.target.value })
    } 

    const handleSubmmit = async (e) => {
        e.preventDefault()  
        await axios.post(`api/users/verify`, user)
        .then((res) => {
            if (typeof res.data === 'object') {
                setError('')
                setCurrenttUser(res.data)
                navigate('/profile')                
            } else {
                setError(res.data)
            }            
         } )
        .catch((e) => console.log(e))
    }
    const handleClick = () => {
        setIsSignUp(!isSignUp)
    }
    return (
        <div>
            {!isSignUp ? 
                (<div >
                    <Login 
                        user={user}
                        handleChange={handleChange}
                        handleSubmmit={handleSubmmit}
                        handleClick={handleClick}
                    />
                    <button className="login-button" onClick={handleClick}>Sign Up</button>
                    {error && <p>{error}</p>}
                </div>)            
            :
                (<div>
                    <SignUp handleClick={handleClick} error={error} setError={setError} BASE_URL={BASE_URL} currentUser={currentUser} setCurrenttUser={setCurrenttUser}  /> 
                    <button className="login-button" onClick={handleClick}>Login</button>
                </div>)
            }
        </div>
    )
}
export default LoginPage