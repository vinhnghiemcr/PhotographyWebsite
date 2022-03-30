

const Login = ({user, handleChange, handleSubmmit}) => {
 

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
                <div className="button-container">
                <input type="submit"/>
                </div>
        </form>
    )
}
export default Login