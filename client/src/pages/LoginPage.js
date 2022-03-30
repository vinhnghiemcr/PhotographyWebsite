import { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import axios from "axios";

const LoginPage = () => {

    const [isSignUp, setIsSignUp] = useState(false)
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {  
        setUser({...user,  [e.target.name]: e.target.value })
    } 

    const handleSubmmit = async (e) => {
        console.log(user, "111111111")
        try {
            const response = await axios.get(`/users/verify`, user)
            console.log(response.data, "222222222")
            // setCurrenttUser(response.data)           
        } catch (error) {
            console.log(error.message)
        }        
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
                    <SignUp />
                    <button onClick={handleClick}>Login</button>
                </div>)
            }
        </div>
    )
}
export default LoginPage