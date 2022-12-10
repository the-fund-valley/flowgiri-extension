import React from "react";
import { useRecoilValue } from "recoil";
import { ThemesCatagoryState } from "../state/State";

function Sidebar() {
  const catagoriesValue = useRecoilValue(ThemesCatagoryState);
  return (
    <div>
      <div className="content-catagory-list mt-[12px]  md:block  rounded-[10px] h-auto w-[190px] pb-[20px]">
        {catagoriesValue.map((item, i) => {
          // active-section-border
          return (
            <div key={i} className="pl-[30px] flex justify-between cursor-pointer mb-[26px] ">
              <p className=" text-[16px] font-[400] text-[#585858] leading-[16px] ">
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
