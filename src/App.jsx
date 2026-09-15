import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { Routes,Route } from 'react-router-dom'
import Home from './components/pages/home'
import About from './components/pages/about'
import Industries from './components/pages/industries'
import Career from './components/pages/career'
import Contact from './components/pages/contact'
import Overview from './components/pages/overview'
import Error from './components/pages/error'
import Vision from './components/pages/vision'


const App = () => {
  return (
    <div className='h-screen  text-black'>
      <Header/>
    
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/overview' element={<Overview/>} />
    <Route path='/career' element={<Career/>} />
    <Route path='/industries' element={<Industries/>} />
    <Route path='/contact' element={<Contact/>} />

     
     
     
     <Route path='*' element={<Error/>}/>   
    </Routes>
          
     {/* <About/> */}
     {/* <Overview/> */}
        <Footer/>
        {/* <Vision/> */}
    

      
    </div>

  



  )
}

export default App
