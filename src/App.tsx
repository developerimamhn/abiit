import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import BuyCrypto from './components/BuyCrypto'
import Portfolio from './components/Portfolio'
import Rewards from './components/Rewards'
// import AgeCalculator from './components/AgeCalculator'
import AllInOne from './components/AllInOne'
import FooterSection from './components/FooterSection'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <Stats />
    <BuyCrypto />
    <Portfolio />
    <Rewards />
    {/* <AgeCalculator /> */}
    <AllInOne />
    <FooterSection />
    </>
  )
}

export default App
