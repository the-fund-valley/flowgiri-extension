import React, { useEffect } from 'react'
import ContentCard from '../ContentCard.jsx';
import { useRecoilValue } from 'recoil';
import {TemplatesState } from '../../state/State';


function Templates() {

  const templates = useRecoilValue(TemplatesState)

  return (
    <>
        <div className="items">
            <div className="grid  gap-[18px] px-[0px] pb-8 flex grid-cols-1 md:grid-cols-2 max-h-[80vh] overflow-auto content-card-container">
              {templates.map((item, i) => {
                return <ContentCard item={item} key={i} />;
              })}
            </div>
          </div>

    </>
  )
}

export default Templates;