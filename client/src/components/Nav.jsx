import { Link } from 'react-router-dom'

const Nav = ({cart, currentuser, setCurrenttUser}) => {

  const logout = () => {
    setCurrenttUser(null)
  }

  return (
    <header className='nav'>
      <h2 className='rainbow-text'>Nghiem Truong Photography</h2>
      <nav>
        <Link to='/' className='glow-effect'>Home</Link>
        <Link to='/collection' className='glow-effect'>Collection</Link>
        <Link to='/about' className='glow-effect'>About</Link>
        <Link to='/contact' className='glow-effect'>Contact</Link>
        <Link to='' className='glow-effect'>Cart: {cart.packages.length + cart.pictures.length}</Link>
        { !currentuser ? 
        <Link to='login' className='glow-effect'>Login</Link> 
        :
         <button className='glow-effect' onClick={logout} >Logout</button>
        }
        
      </nav>
    </header>
  )
}

export default Nav
