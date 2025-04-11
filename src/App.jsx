import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
      <Navbar>
      <div className="p-4">Main Content</div>
      </Navbar>
      <Hero></Hero>
    </>
  )
}

export default App
