import { useState } from "react"
import axios from "axios"


const SignUp = () => {
    
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        displayName: '',
    })
    
    
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value, "11111111");
        setNewUser({...newUser,  [e.target.name]: e.target.value })
    } 

    const handleNewUser = async () => {
        try {
            const response = await axios.post(`/users`, newUser)
            console.log(response.data, "222222222")        
        } catch (error) {
            console.log(error.message)
        }  
    }

    return (
        <div onSubmit={handleNewUser}>
            <div className="input-container">
                <label>Username: </label>
                <input onChange={handleChange} type="text" name="username" value={newUser.username} required />
                </div>
                <div className="input-container">
                <label>Password: </label>
                <input onChange={handleChange} type="password" name="password" value={newUser.password} required />
                </div>
                <div className="input-container">
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
        </div>
    )
}

export default SignUp