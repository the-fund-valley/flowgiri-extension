import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Filter from "./components/Filter.jsx";
import FlowContents from "./components/FlowContents.jsx";

import Navbar from "./components/Navbar.jsx";
import { getAndSetThemesDataToState } from "./Request/api.js";
import { activeCategoryState } from "./state/State.js";

function Main() {
  const [extensionIsOn, setExtensionIsOn] = useState(true);
  const activeCategory = useRecoilValue(activeCategoryState);

  useEffect(() => {
    getAndSetThemesDataToState();


      window.addEventListener("message", (event) => {

          if (event.data.author === 'besnik-flowgiri-app-toggle'){
              setExtensionIsOn(event.data.toggle)
          }

    }, false);


  }, []);


  return (
    <>
      <div  id='flowgiri-app-container'>
        {extensionIsOn && (
            <>
         <div id='flowgiri-app-bg' className='z-[99]  fixed top-0 bottom-0 right-0 left-[33px] bg-[rgba(0,0,0,.2)]'></div>
          <div className="z-[9999] bg-[#F3F3F3] flowgiri-applicaiton fixed top-[35px] left-[35px] h-[100vh] w-[833px]">
            <Navbar />

            <Filter />

            <FlowContents />
          </div>
            </>
        )}
      </div>
    </>
  );
}

export default Main;
