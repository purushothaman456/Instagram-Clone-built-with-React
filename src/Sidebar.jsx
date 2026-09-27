import React from 'react'
import { useNavigate } from 'react-router-dom'


function Sidebar() {
  const navigate = useNavigate();


  return (
    <div className='m-3 position-fixed'>
       <div className='d-flex flex-column gap-3'>
        <img className="logo-text" src='src\assets\png-clipart-letter-instagram-font-instagram-text-logo.png' alt=""/>
    

        <div><i className="bi bi-house-door"></i>Home</div>
        <div><i className="bi bi-file-play"></i>Reels</div>
        <div><i className="bi bi-send"></i>Messages</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-heart"></i>Notifications</div>
        <div><i className="bi bi-plus"></i>Create</div>
        <div><i onClick={()=>(navigate('/profile'))}className="bi bi-person-circle" ></i>Profile</div>
    </div>
    <div className='d-flex flex-column gap-3 position fixed-bottom mb-5 m-3'>
        <div><i className="bi bi-list"></i>More</div>
        <div><i className="bi bi-threads"></i>Threads</div>
    </div>
  </div>


    

  )
}

export default Sidebar