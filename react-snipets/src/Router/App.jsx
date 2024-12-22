import Homepage from './Homepage'
import AboutMe from './AboutMe'
import { Link, Route, Routes } from 'react-router-dom'



function App() {

  return (
    <div className='App'>
      <nav>
        <Link to="/" className='nav-item'>Homepage</Link>
        <Link to="/about-me" className='nav-item'>About-me</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about-me" element={<AboutMe />}/>
      </Routes>
    </div>
  )
}

export default App
