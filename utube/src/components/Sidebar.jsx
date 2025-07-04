import React from 'react'
import './Sidebar.css';
import home from '../assets/home.png';
import game_icon from '../assets/game_icon.png';
import automobiles from '../assets/automobiles.png';
import sports from '../assets/sports.png';
import entertainment from '../assets/entertainment.png';
import tech from '../assets/tech.png';
import music from '../assets/music.png';
import blogs from '../assets/blogs.png';
import news from '../assets/news.png';


const Sidebar = ({sidebar,category,setcat}) => {
  return (
    <div className= {`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortlinks">
            <div className={`sidelink ${category===0?"active":""}`}  onClick={()=>setcat(0)} >
                <img src={home} alt=''/><p>Home</p>
            </div>
            <div className={`sidelink ${category===20?"active":""}`}  onClick={()=>setcat(20)} >
                <img src={game_icon} alt=''/><p>Gaming</p>
            </div>
            <div className={`sidelink ${category===2?"active":""}`}  onClick={()=>setcat(2)} >
                <img src={automobiles} alt=''/><p>Automobiles</p>
            </div>
            <div className= {`sidelink ${category===17?"active":""}`}  onClick={()=>setcat(17)} >
                <img src={sports} alt=''/><p>Sports</p>
            </div>
            <div className= {`sidelink ${category===24?"active":""}`}  onClick={()=>setcat(24)} >
                <img src={entertainment} alt=''/><p>Entertainment</p>
            </div>
            <div className={`sidelink ${category===28?"active":""}`}  onClick={()=>setcat(28)} >
                <img src={tech} alt=''/><p>Techie</p>
            </div>
            <div className={`sidelink ${category===10?"active":""}`}  onClick={()=>setcat(10)} >
                <img src={music} alt=''/><p>Music</p>
            </div>
            <div className={`sidelink ${category===22?"active":""}`}  onClick={()=>setcat(22)} >
                <img src={blogs} alt=''/><p>Blogs</p>
            </div>
            <div className={`sidelink ${category===25?"active":""}`}  onClick={()=>setcat(25)} >
                <img src={news} alt=''/><p>News</p>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar