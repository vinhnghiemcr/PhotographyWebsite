import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SignUp = ({BASE_URL, setEdited, setCurrenttUser, error, setError, handleClick, currentUser}) => {
    let navigate = useNavigate()
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        displayName: '',
    })
    const [rePassword, setRePasswork ] = useState('')
    
  
    const handleChange = (e) => {
        setNewUser({...newUser,  [e.target.name]: e.target.value })
    } 

    const rePasswordChange = (e) => {
        setRePasswork(e.target.value)
    } 

    const handleNewUser = async (e) => {
        e.preventDefault()
        console.log(currentUser, "CURRENT USER")
        console.log(`${BASE_URL}/users/${currentUser._id}`, 'API')
        if (rePassword === newUser.password){
            if (currentUser) {
                await axios.put(`${BASE_URL}/users/${currentUser._id}`, newUser)
                .then((res) => {
                    setError('')
                    setCurrenttUser(res.data)
                    setEdited((c) => !c)
                })
                .catch((e) => setError(`${newUser.username} is not available. Please choose another username!`))
            } else {
                await axios.post(`${BASE_URL}/users`, newUser)
                .then((res) => {
                        setError('')
                        setCurrenttUser(res.data)
                        navigate('/profile')
                })
                .catch((e) => setError(`${newUser.username} is not available. Please choose another username!`))
            }
        } else {setError('Password must matched!')}
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
            <div className="input-container">
            <label>Re-Enter Password: </label>
            <input onChange={rePasswordChange} type="password"  name="rePassword" value={rePassword} required  />
            </div>
            <div className="input-container">
            <label>Display Name: </label>
            <input onChange={handleChange} type="text" name="displayName" value={newUser.displayName} required />
            </div>
            <div className="button-container">
            <input type="submit" />
            </div>
            <div className="button-container">
            {!currentUser && <button className="login-button" onClick={handleClick}>Login</button>}
            </div>
            {error && <p>{error}</p>}
        </form>
    )
}

export default SignUp