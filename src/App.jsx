import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Experience from './component/Experience'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className="bg-[#0f172a] min-h-screen text-white">
      <Navbar/>
      <Header/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
    </>
  )
}

export default App
