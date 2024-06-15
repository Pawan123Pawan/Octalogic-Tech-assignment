import React from 'react'
import Sidebar from '../layouts/Sidebar'
import Content from '../layouts/Content'

const Home = () => {
  return (
    <div className='flex-1 h-[100vh] flex'>
        <Sidebar/>
        <Content/>
    </div>
  )
}

export default Home