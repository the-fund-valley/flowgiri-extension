import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ThemesCategoryState } from "../state/State";
import { activeCategoryState } from './../state/State';

function Sidebar() {
  const catagoriesValue = useRecoilValue(ThemesCategoryState);
  const [activeCategory, setActiveCategory] = useRecoilState(activeCategoryState)

  const selectCategory = (item) => {
    setActiveCategory(item)
  }


  return (
    <div>
      <div className="content-catagory-list mt-[12px] gap-[10px] flex-col flex   rounded-[10px] h-auto w-[190px] pb-[20px]">
        {catagoriesValue.map((item, i) => {
          // active-section-border
          return (
            <div onClick={()=>selectCategory(item)} key={i} className={activeCategory !== item ?'pl-[30px] flex justify-between cursor-pointer py-[7px] gap-[16px]' : 'pl-[27px] py-[7px] gap-[12px] border-box flex justify-between cursor-pointer  border-l-[3px] border-solid border-[#5E5DF0]'}>
              <p className={activeCategory === item ? ' text-[16px] font-bold text-[#5E5DF0] leading-[16px] ':'text-[16px] font-medium text-[#585858] leading-[16px] '}>
                {item}
              </p>
              <span className=" text-[16px] font-[400] text-[#585858] leading-[16px] ">
                (130)
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
