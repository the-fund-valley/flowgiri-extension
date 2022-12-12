import React, { useEffect, useState } from 'react'
import ContentCard from './ContentCard.jsx';
import Sidebar from './Sidebar.jsx'
import { useRecoilValue } from 'recoil';
import { activeCategoryState, componentsState } from '../state/State.js';
import { pagesState, TemplatesState, SectionsState } from './../state/State';
import { getAndSetThemeData } from '../Request/api.js';

function FlowgiriComponents() {


  const activeCategory = useRecoilValue(activeCategoryState)
  const pages = useRecoilValue(pagesState)
  const components = useRecoilValue(componentsState)
  const templates = useRecoilValue(TemplatesState)
  const sections = useRecoilValue(SectionsState)

  const [contentsData, setContentsData] = useState(templates);


  useEffect( () => {


   console.log('category',activeCategory)
    switch(activeCategory) {

      case 'templates':
        setContentsData(templates)
        break;
      case 'sections':
        setContentsData(sections)
        break;
      case 'pages':
        setContentsData(pages)
        break;
      case 'components':
        setContentsData(components)
        break;
      default:

    }


  },[activeCategory])


  useEffect(()=>{
    getAndSetThemeData()
  })

  return (
    <div className='w-full pb-[28px] gap-[17px] flex  px-[20px] '>
        <Sidebar/>

        <div className="items">
            <div className="grid  gap-[18px] px-[0px] pb-8 flex grid-cols-1 md:grid-cols-2 max-h-[80vh] overflow-auto content-card-container">
              {contentsData.map((item, i) => {
                return <ContentCard key={i} />;
              })}
            </div>
          </div>

    </div>
  )
}

export default FlowgiriComponents