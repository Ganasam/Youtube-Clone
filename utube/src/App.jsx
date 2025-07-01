import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Video from './pages/video/Video.jsx'
import Search from './pages/search/Search.jsx'


const App = () => {
  const [sidebar,setsidebar]=useState(true);
  return (
    <>
    <Navbar setsidebar={setsidebar}/>
    <Routes>
    <Route path='/' element={<Home sidebar={sidebar}/>} />
    <Route path="/video/:categoryId/:videoId" element={<Video />} />
    <Route path="/video/:q" element={<Search sidebar={sidebar}/>} />
    <Route path="/video/:q/:categoryId/:videoId" element={<Video />} />
    </Routes>
    </>
  )
}

export default App
