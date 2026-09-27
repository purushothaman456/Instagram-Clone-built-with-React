import React from 'react'
import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Stories() {

  const [stories, setStories] = useState([])
  const navigate = useNavigate()

  let tot =0;

  useEffect(()=>{
    fetch('http://localhost:3000/stories')
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err));
  },[]);

  return (
    <div className='story d-flex'>
      <div className='d-none'>
      {tot = stories.length}
      </div>
      {stories.length > 0 ? stories.map((story)=>(
        <div className='mx-1' key={story.id}  onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
          <div className='gradiant-border'>
            <img className='story-dp rounded-circle' src={story.image} alt={'image'} />
          </div>
          <p className='text-truncate' style={{width:'40px'}}>{story.username}</p>
        </div>
      )) : (
        <p>No stories available.</p>
      )}
    </div>
  )
}

export default Stories