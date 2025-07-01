import {React,useState} from 'react'
import menu from '../assets/menu.png'
import logo from '../assets/youtube-logo.png'
import search from '../assets/search.png'
import upload_icon from '../assets/upload.png'
import more_icon from '../assets/more.png'
import notification from '../assets/notification.png'
import profile from '../assets/user_profile.jpg'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Navbar = ({setsidebar}) => {

  const navigate=useNavigate();
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
};
const handleSearchSubmit = (e) => {
  e.preventDefault();
  if (query) {
    const encodedQuery = encodeURIComponent(query);

      navigate(`/video/${encodedQuery}`); 
  }
};
  return (
    <nav className="flexi">
        <div className=" nav-left flexi">
            <img className="menu-icon" onClick={()=>setsidebar((prev)=>prev===false?true:false)} src={menu} alt='menu'></img>
            <Link to='/'><img className="logo" src={logo} alt=''></img></Link>
        </div>
        <div className=" nav-mid flexi">
             <form className="search-box flexi" onSubmit={handleSearchSubmit}>
                <input 
                    type='text' 
                    placeholder='Search' 
                    value={query}
                    onChange={handleInputChange} 
                />
                <button type="submit">
                    <img src={search} alt='Search' />
                </button>
            </form>
        </div>
        <div className=" nav-right flexi">
            <img src={upload_icon} alt=''></img>
            <img src={more_icon} alt=''></img>
            <img src={notification} alt=''></img>
            <img src={profile} className="user_icon" alt=''></img>
        </div>
    </nav>
  )
}

export default Navbar