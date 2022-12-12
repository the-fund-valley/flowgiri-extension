import React from 'react'
import Filter from './components/Filter.jsx'
import FlowContents from './components/FlowContents.jsx'

import Navbar from './components/Navbar.jsx'

function Main() {
  return (
    <div className='bg-[#F3F3F3] flowgiri-applicaiton fixed top-[35px] left-[35px] h-[100vh] w-[833px]'>
        <Navbar/>

        <Filter/>

        <FlowContents/>

    </div>
  )
}

export default Main