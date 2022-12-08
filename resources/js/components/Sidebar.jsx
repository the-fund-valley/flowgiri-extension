import React from 'react'
import { useRecoilValue } from 'recoil';
import { ThemesCatagoryState } from '../state/State';

function Sidebar() {
    const catagoriesValue = useRecoilValue(ThemesCatagoryState)
  return (
    <div>
            <div className="content-catagory-list  md:block hidden rounded-[10px] h-auto w-[320px] bg-[#fff]  mt-[21px] py-[49px]">
              {catagoriesValue.map((item,i) => {
                // active-section-border
                return (
                  <p  key={i} className="pl-[30px]  cursor-pointer mb-[26px] text-[16px] font-[400] text-[#585858] leading-[16px] ">
                    {item}
                  </p>
                );
              })}
            </div> 
    </div>
  )
}

export default Sidebar