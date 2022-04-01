import { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const LoginPage = ({BASE_URL, setCurrenttUser}) => {
    
    let navigate = useNavigate()
    const [isSignUp, setIsSignUp] = useState(false)
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
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
                    {error && <p>{error}</p>}
                </div>)            
            :
                (<div>
                    <SignUp handleClick={handleClick} error={error} setError={setError} BASE_URL={BASE_URL} setCurrenttUser={setCurrenttUser}  /> 
                </div>)
            }
        </div>
    )
}
export default LoginPage