import React,{useEffect} from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeButtonState, activeThemeState, ThemesState } from "../state/State";
import { getAndSetThemeCategoryDataToState, getAndSetThemeDataToState } from './../Request/api';


function Sidebar({catagories, setter,activeCategory}) {
  const [activeTheme, setActiveTheme] = useRecoilState(activeThemeState)
  const [activeButton, setActiveButton] = useRecoilState(activeButtonState)

  const selectCategory = (item) => {

    if(!item) {
      setter({})
      getAndSetThemeDataToState()
      return
    }
    setter(item)
    getAndSetThemeCategoryDataToState(item.id)
  }


  return (
    <div>
      <div className="content-catagory-list px-[3px]  mt-[12px] gap-[10px] flex-col flex   rounded-[10px] h-auto w-[190px] pb-[20px]">
       <div  onClick={()=> selectCategory()} className={activeCategory.id ?'pl-[10px] flex justify-between cursor-pointer py-[7px] gap-[16px] pr-[7px] ' : 'pl-[7px] pr-[7px] py-[7px] gap-[12px] border-box flex justify-between cursor-pointer  border-l-[3px] border-solid border-[#5E5DF0]'}>
              <p className={!activeCategory.id ? ' text-[16px] font-bold text-[#5E5DF0]  leading-[16px] ':'text-[16px] font-medium text-[#585858] leading-[16px] '}>
                All {activeButton.name}
              </p>
              <span className=" text-[16px] font-[400] text-[#585858] leading-[16px] ">
                {/* (130) */}

              </span>
         </div>
        {catagories.map((item, i) => {
          // active-section-border
          return (
            <div onClick={()=> selectCategory(item)} key={i} className={activeCategory.id !== item.id ?'pl-[10px] flex justify-between cursor-pointer py-[7px] gap-[16px] pr-[7px] ' : 'pl-[7px] pr-[7px]  py-[7px] gap-[12px] border-box flex justify-between cursor-pointer  border-l-[3px] border-solid border-[#5E5DF0]'}>
              <p  className={activeCategory.id === item.id ? 'text-[16px] whitespace-nowrap font-bold text-[#5E5DF0] leading-[16px] ':'text-[16px] whitespace-nowrap font-medium text-[#585858] leading-[16px] '}>
                {item.name}
              </p>
              <span className=" text-[16px] font-[400] text-[#585858] leading-[16px] ">
                {/* (130) */}
                {item.total_count && item.total_count}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
