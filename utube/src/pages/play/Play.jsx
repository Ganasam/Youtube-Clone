import React, { useEffect, useState } from 'react';
import './play.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import moment from 'moment/moment.js'
import {api_key,value_conv} from '../../../data.js'

const Play = ({videoId}) => {
  const [apidata,setapidata]=useState(null);
  const [cmntdata,setcmnt]=useState([]);

  const fetchdata=async()=>{
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${api_key}`)
    .then(response=>response.json())
    .then(data=>setapidata(data.items[0]));
  }
  const fetchcmnt=async()=>{
    fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=20&videoId=${videoId}&key=${api_key}`)
    .then(response=>response.json())
    .then(data=>setcmnt(data.items));
  }
  useEffect(()=>{
     fetchdata();
     fetchcmnt();
  },[videoId])

  return (
    <div className='play'>
      {/*<video src={video1} controls autoPlay muted></video>*/}
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <h3>{apidata?.snippet?.title? value_conv(apidata.snippet.title):"Title is here"}</h3>
      <div className='play-video-info'>
        <p>{apidata ? value_conv(apidata.statistics?.viewCount) : "15k"} views &bull; 
        {apidata?.snippet?.publishedAt ? moment(apidata.snippet.publishedAt).fromNow() : ""}</p>
        <div>
          <span><img src={like} alt="" /> {apidata?.statistics?.likeCount? value_conv(apidata.statistics.likeCount):"10k"} likes</span>
          <span><img src={dislike} alt="" /> 2</span>
          <span><img src={share} alt="" /> Share</span>
          <span><img src={save} alt="" /> Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={apidata?.snippet? apidata.snippet.thumbnails.default.url:""} alt=''/>
        <div>
          <p>{apidata?.snippet?.channelTitle? apidata.snippet.channelTitle:""}</p>
          <span>1M subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apidata?.snippet?.description? apidata.snippet.description.slice(0,550)+"...":""}</p>
        <p>Subscribe to watch more content</p>
        <hr />
        <h4>{apidata?.statistics?.commentCount? apidata.statistics.commentCount:""} comments</h4>
      
      <div className="comment-section">
      {cmntdata.length === 0 ? (
        <p>No comments available.</p>
         ) : (
        cmntdata.map((comment, index) => {
          const snippet = comment.snippet.topLevelComment.snippet;
          return (
            <div key={index} className="comment">
              <img src={snippet.authorProfileImageUrl} alt="User Avatar" />
              <div>
                <h3>
                  {snippet.authorDisplayName} <span>{moment(snippet.publishedAt).fromNow()}</span>
                </h3>
                <p>{snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="Like" />
                  <span>{snippet.likeCount}</span>
                  <img src={dislike} alt="Dislike" />
                  <span>0</span>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
        
      </div>
    </div>
  );
};

export default Play;
