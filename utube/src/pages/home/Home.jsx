import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Feed from '../../components/feed/Feed'
import './home.css'

const Home = ({sidebar}) => {
  const [category,setcat]=useState(0);
  return (
   <>
   <Sidebar sidebar={sidebar} category={category} setcat={setcat}/>
   <div className={`container ${sidebar?"":"large-container"}`}>
    <Feed category={category}/>
   </div>
   </>
  )
}

export default Home