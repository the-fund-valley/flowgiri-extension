import React from 'react'
import Filter from './components/Filter.jsx'
import FlowgiriComponents from './components/FlowgiriComponents.jsx'
import Navbar from './components/Navbar.jsx'

function Main() {
  return (
    <div className='bg-[#F3F3F3] max-w-[833px]'>
        <Navbar/>



        <Filter/>

        <FlowgiriComponents/>




    </div>
  )
}

export default Main