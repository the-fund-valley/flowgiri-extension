import React from 'react'
import ContentCard from './ContentCard.jsx';
import Sidebar from './Sidebar.jsx'

function FlowgiriComponents() {


  return (
    <div className='w-full pb-[28px] gap-[17px] flex  px-[20px] '>
        <Sidebar/>

        <div className="items">
            <div className="grid gap-8 px-[0px] pb-8 flex grid-cols-1 md:grid-cols-2 max-h-[1100px] content-card-container overflow-auto">
              {[1,2,3,4,5,6,7,8,9,10,11,12].map((item, i) => {
                return <ContentCard key={i} />;
              })}
            </div>
          </div>

    </div>
  )
}

export default FlowgiriComponents