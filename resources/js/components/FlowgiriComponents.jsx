import React from 'react'
import ContentCard from './ContentCard.jsx';
import Sidebar from './Sidebar.jsx'

function FlowgiriComponents() {

  
  return (
    <div className='w-full py-[28px] mt-[20px] px-[20px] '>
        <Sidebar/>

        <div className="items">
            <div className="grid gap-8 px-[0px] pb-8 md:grid-cols-1 grid-cols-1 lg:grid-cols-3 max-h-[1100px] content-card-container overflow-auto">
              {[1,2,3,4,5,6,7,8,9,10,11,12].map((item, i) => {
                return <ContentCard key={i} />;
              })}
            </div>
          </div>

    </div>
  )
}

export default FlowgiriComponents