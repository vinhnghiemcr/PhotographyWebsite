import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <h2 className='rainbow-text'>Nghiem Truong Photography</h2>
      <nav>
        <Link to='/' className='glow-effect'>Home</Link>
        <Link to='about' className='glow-effect'>About</Link>
      </nav>
    </header>
  )
}

export default Nav
