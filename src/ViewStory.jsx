import React from 'react'
import { useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
function ViewStory() {
  const { id } = useParams()
  const { tot } = useParams()
  const navigate = useNavigate();

  const [story, setStory] = useState(null)
  useEffect(() => {
    fetch(`http://localhost:3000/stories/${id}`)
      .then((data) => data.json())
      .then((data) => setStory(data))
      .catch((err) => console.log(err));
  }, [id]);

  if(id > tot || id < 1){
      navigate('/');
      
    }
    
  

  return (
   <div className="username">
    {story ? (
      <div>
        <div className='d-flex justify-content-center align-items-center'>
          <Link to={`/story/${Number(id) - 1}/${tot}`}>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </Link>
          <img  className='' src={story.storyimage} alt={'image'} />
          <Link to={`/story/${Number(id) + 1}/${tot}`}>
            <i className="bi bi-arrow-right-circle-fill"></i>
          </Link>
        </div>
       
      </div>
    ) : (
      <div>'Loading...'</div>
    )}
  </div>
  )
}

export default ViewStory