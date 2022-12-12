import React from 'react'
import ContentCard from '../ContentCard.jsx';
import { useRecoilValue } from 'recoil';
import { SectionsState } from '../../state/State';


function Sections() {

  const sections = useRecoilValue(SectionsState)


  return (
    <>
        <div className="items">
            <div className="grid  gap-[18px] px-[0px] pb-8 flex grid-cols-1 md:grid-cols-2 max-h-[80vh] overflow-auto content-card-container">
              {sections.map((item, i) => {
                return <ContentCard item={item} key={i} />;
              })}
            </div>
          </div>
    </>
  )
}

export default Sections;