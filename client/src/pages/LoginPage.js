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

    const handleChange = (e) => {  
        setUser({...user,  [e.target.name]: e.target.value })
    } 

    const handleSubmmit = async (e) => {
        e.preventDefault()
        console.log(user, "111111111")
        
        // const response = await axios.get(`${BASE_URL}/users/verify`, { params: { user } }).then((response) => console.log(response))
        await axios.post(`${BASE_URL}/users/verify`, user)
        .then((res) => {
            setCurrenttUser(res.data)
            navigate(-1)
         } )
        .catch((e) => console.log(e, "ERRRRR"))
    }
    const handleClick = () => {
        setIsSignUp(!isSignUp)
    }

    return (
        <div>
            {!isSignUp ? (<div >
                    <Login 
                        user={user}
                        handleChange={handleChange}
                        handleSubmmit={handleSubmmit}
                    />
                    <button onClick={handleClick}>Sign Up</button>
                </div>)            
            :
                (<div>
                    <SignUp BASE_URL={BASE_URL} setCurrenttUser={setCurrenttUser}  />
                    <button onClick={handleClick}>Login</button>
                </div>)
            }
        </div>
    )
}
export default LoginPage