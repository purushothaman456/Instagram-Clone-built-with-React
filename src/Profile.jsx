import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

function profile() {

  const[profile,setprofile] = useState();
  useEffect(() => {
  axios.get('http://localhost:3000/profile')
    .then(data => {
      setprofile(data.data);
    });
}, []);

function handleonchange(e){
  setprofile(prev => ({
    ...prev,
    [e.target.name] : (e.target.value)
}))
}

const handleUpdate = async()=> {
  axios.put('http://localhost:3000/profile', profile)
  .then((res) => {console.log(res.data);})
    .catch((err) => {
      console.log(err);
    });
};


  return (
    <div className='m-5'>
      {profile ? (
        <div>
        <img src={profile.profileImage} className='profileimage rounded-circle' />
        <h5>{profile.username}</h5>

        <input
         type='text'
         value={profile.username}
         name='username'
         className='form-control my-4'
         onChange={handleonchange}/>

         <input
          type='text'
          value={profile.profileImage}
          name='profileImage'
          className='form-control my-4'
          onChange={handleonchange}/>

          <button className='btn btn-primary' 
          onClick={handleUpdate}>
          update
          </button>
        </div>
      ):(
        <div>profile loading</div>
      )}
    </div>
  )
}

export default profile