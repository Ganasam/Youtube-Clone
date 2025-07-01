import React, { useEffect, useState } from 'react'
import './searchfeed.css'
import { useParams } from 'react-router-dom'
import { api_key,title_short } from '../../../data';
import { Link } from 'react-router-dom';

const Searchfeed = () => {
    const {q}=useParams();
    
    const [querydata,setqdata]=useState([]);
    const [catdat,setcatdata]=useState([]);

    const fetchqdata=async()=>{
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&key=${api_key}`)
        .then(response=>response.json())
        .then(data=>setqdata(data.items));
      }
    
      const fetchcat=async(id)=>{
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${api_key}`)
        .then(response=>response.json())
        .then(data=>{
          if (data.items && data.items.length > 0) {
            setcatdata(prevState => ({
              ...prevState,
              [id]: data.items[0].snippet.categoryId, 
            }));
          }
        })
      }

    useEffect(()=>{
       fetchqdata();
    },[q])

    useEffect(() => {
      
      querydata.forEach(item => {
        fetchcat(item.id.videoId);
      });
    }, [querydata]);

  return (
    <>
       <div className='searchfeed'>
       {querydata && querydata.length > 0 ? (
    querydata.map((item, index) => {
      const categoryId = catdat[item.id?.videoId];  

      return (
        <Link to={`/video/${categoryId}/${item.id?.videoId}`} className="card" key={index}>
          {item.snippet?.thumbnails?.medium?.url && (
            <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
          )}
          <h2>{title_short(item.snippet?.title || "No Title")}</h2>
          <h3>{item.snippet?.channelTitle || "Unknown Channel"}</h3>
        </Link>
      );
    })
  ) : (
    <p>Loading...</p>
  )}
     </div>
    </>
  )
}

export default Searchfeed