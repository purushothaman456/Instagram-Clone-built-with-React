import React from 'react'
import { useState,useEffect } from 'react'


function Suggestions() {
  const[suggestions,setsuggestions] = useState([])
  const[profile,setprofile] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/suggestions')
      .then((data) => data.json())
      .then((data) => setsuggestions(data))
      .catch((err) => console.log(err));

      fetch('http://localhost:3000/profile')
      .then((data) => data.json())
      .then((data) => setprofile(data))
      .catch((err) => console.log(err));
  },[]);
  return (
    <div >
      <div className='suggestions'>
        {profile ?
      <div className='d-flex'>
        <img className='dp rounded-circle' src={profile.profileImage} alt={'image'} />
        <h5>{profile.username}</h5>
        <small className='ms-auto text-primary'>switch</small>
        </div>
        :<div>Loading...</div>}

        <div className='d-flex'>
        <b>suggested for you</b>
        <div className='ms-auto'>see all</div>
        </div>
        {suggestions.map((suggestion)=>(
          <div className='d-flex ps my-2' key={suggestion.id}>
            <img className='dp rounded-circle' src={suggestion.profileImage} alt={'image'} />
            <h5>{suggestion.username}</h5>
            <p className='ms-auto text-primary'>follow</p>
          </div>
        ))}

      </div>
      
    </div>
  )
}

export default Suggestions