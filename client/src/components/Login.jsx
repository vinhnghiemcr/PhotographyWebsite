

const Login = ({user, handleChange, handleSubmmit, handleClick}) => {
 

    return (
        <form onSubmit={handleSubmmit}>
                <div className="input-container">
                <label>Username: </label>
                <input onChange={handleChange} type="text" name="username" value={user.username} required />
                </div>
                <div className="input-container">
                <label>Password: </label>
                <input onChange={handleChange} type="password" name="password" value={user.password} required />
                </div>
                <div >
                <input type="submit" className="button-container"/>
                </div>
                <div>
                {/* <button className="login-button" onClick={handleClick}>Login</button> */}
                </div>
        </form>
    )
}
export default Login