import React from 'react'
import Play from '../play/Play'
import './video.css'
import Recommend from '../../components/recommend/Recommend'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId,categoryId}=useParams();
  return (
    <div className='video-page'>
    <Play videoId={videoId}/>
    <Recommend categoryId={categoryId}/>
    </div>

  )
}

export default Video