import React, { useEffect } from 'react'
import Sidebar from './Sidebar.jsx'
import { useRecoilValue } from 'recoil';
import { activeCategoryState } from '../state/State.js';
import { getAndSetThemeDataToState, getAndSetThemesDataToState } from '../Request/api.js';
import Templates from './Templates/Templates.jsx';
import Sections from './Sections/Sections.jsx';
import Pages from './pages/Pages.jsx';


function FlowContents() {

  const activeCategory = useRecoilValue(activeCategoryState)

  useEffect(()=>{
    getAndSetThemeDataToState()
  },[activeCategory])

  return (
    <div className='w-full pb-[28px] gap-[17px] flex  pl-[20px] pr-[10px]'>


       {activeCategory === 'templates' && <Templates/>}
       {activeCategory === 'sections' && <Sections/>}
       {activeCategory === 'pages' && <Pages/>}

    </div>
  )
}

export default FlowContents