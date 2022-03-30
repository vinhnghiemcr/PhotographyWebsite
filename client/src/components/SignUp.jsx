import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SignUp = ({BASE_URL, setCurrenttUser}) => {
    let navigate = useNavigate()
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        displayName: '',
    })
    
    
    const handleChange = (e) => {
        setNewUser({...newUser,  [e.target.name]: e.target.value })
    } 

    const handleNewUser = async (e) => {
        e.preventDefault()
        console.log(newUser, "NEW")
        await axios.post(`${BASE_URL}/users`, newUser)
        .then((res) => {
            setCurrenttUser(res.data)
            console.log(res, "RRESSSSSSSSSSSS")
            navigate(-1)
        })
        .catch((e) => console.log(e))                
    }

    return (
        <form onSubmit={handleNewUser}>
            <div className="input-container">
                <label>Username: </label>
                <input onChange={handleChange} type="text" name="username" value={newUser.username} required />
                </div>
                <div className="input-container">
                <label>Password: </label>
                <input onChange={handleChange} type="password" name="password" value={newUser.password} required />
                </div>
                <div cslassName="input-container">
                <label>Re-Enter Password: </label>
                <input type="password" name="pass2" required />
                </div>
                <div className="input-container">
                <label>Display Name: </label>
                <input onChange={handleChange} type="text" name="displayName" value={newUser.displayName} required />
                </div>
                <div className="button-container">
                <input type="submit" />
                </div>
        </form>
    )
}

export default SignUp