import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
      <h2 className='rainbow-text'>World of Games</h2>
      <nav>
        <Link to='/' className='glow-effect'>Home</Link>
        <Link to='about' className='glow-effect'>About</Link>
      </nav>
    </header>
  )
}

export default Header
