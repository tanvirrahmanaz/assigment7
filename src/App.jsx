import './App.css'
import AuctionSection from './components/AuctionSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
      <Navbar>
      <div className="p-4">Main Content</div>
      </Navbar>
      <Hero></Hero>
      <AuctionSection></AuctionSection>
    </>
  )
}

export default App
