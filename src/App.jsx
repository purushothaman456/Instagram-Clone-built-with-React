import React from 'react';
import Sidebar from './Sidebar.jsx';
import Feed from './feed.jsx';
import Suggestions from './suggestions.jsx';

function App() {
  return (
    <div className="d-flex vh-100">
      <div className='w-25 '><Sidebar /></div>
      <div className='w-50 '><Feed /></div>
      <div className='w-30'><Suggestions /></div>
    </div>
  )
}

export default App
                  
                  