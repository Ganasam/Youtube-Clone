import React, { useEffect, useState } from 'react'
import './recommend.css'

import { title_short,api_key,value_conv } from '../../../data';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';

const Recommended = ({categoryId}) => {
     const [recdata,setrec]=useState([]);

      const getdatas=async()=>{
           await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&videoCategoryId=${categoryId}&key=${api_key}`)
           .then(response=>response.json()).then(data=>setrec(data.items || []));
        }
     useEffect(()=>{
       getdatas();
     },[categoryId])

     return (
    <div className='recommended'>
      {recdata.length === 0 ? ( // Check if the data is available
        <p>Loading recommendations...</p>
      ) :
      (
      recdata.map((thumb, index) => (
        <Link to={`/video/${thumb.snippet,categoryId}/${thumb.id}`} className='side-video-list' key={index}>
          <img src={thumb.snippet.thumbnails.medium.url} alt={`Thumbnail ${index + 1}`} />
          <div className='vid-info'>
            <h4>{title_short(thumb.snippet.title)}</h4>
            <p>{thumb.snippet.channelTitle}</p>
            <p>{value_conv(thumb.statistics.viewCount)} views &bull; {moment(thumb.snippet.publishedAt).fromNow()}</p>
          </div>
        </Link>
      )))}
    </div>
  );
};

export default Recommended;
