import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import './assests/css/App.css'
import Content from './components/Content'


const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const checkSize = () => {
    if(window.innerWidth < 1024) {
      setCollapsed(true)
    }else{
      setCollapsed(false)
    }
    setWidth((window.innerWidth > 0) ? window.innerWidth : window.screen.width);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  });

  return (
    <div className='layout'>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Content margin={`${width <= 450 ? '0px' : collapsed? '96px': '250px'}`} />
    </div>
  )
}

export default App
