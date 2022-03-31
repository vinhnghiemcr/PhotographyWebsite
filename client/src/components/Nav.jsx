import { GoPerson } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Nav = ({cart, currentUser, setCurrenttUser}) => {

  const logout = () => {
    setCurrenttUser(null)
  }

  return (
    <header className='nav'>
      <h2>Nghiem Truong Photography</h2>
      <nav>
        <Link to='/' className='glow-effect'>Home</Link>
        <Link to='/collection' className='glow-effect'>Collection</Link>
        <Link to='/about' className='glow-effect'>About</Link>
        <Link to='/contact' className='glow-effect'>Contact</Link>
        <Link to='/checkout' className='glow-effect'>Cart: {cart.packages.length + cart.pictures.length}</Link>
        { !currentUser ? 
        <Link to='login' className='glow-effect'>Login</Link> 
        :
        <Link to='profile' className='glow-effect' ><GoPerson /></Link>
        }
        
      </nav>
    </header>
  )
}

export default Nav
