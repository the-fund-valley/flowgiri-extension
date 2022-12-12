import React from 'react'
import ContentCard from '../ContentCard.jsx';
import { useRecoilValue } from 'recoil';

import { pagesState } from '../../state/State';


function Pages() {

  const pages = useRecoilValue(pagesState)

  return (
    <>
        <div className="items">
            <div className="grid  gap-[18px] px-[0px] pb-8 flex grid-cols-1 md:grid-cols-2 max-h-[80vh] overflow-auto content-card-container">
              {pages.map((item, i) => {
                return <ContentCard item={item} key={i} />;
              })}
            </div>
          </div>
    </>
  )
}

export default Pages;