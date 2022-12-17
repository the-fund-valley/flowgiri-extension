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
  }, []);



  return (
    <>
      <div
        onClick={() => setExtensionIsOn(!extensionIsOn)}
        class="flowgiri-icon-area"
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
        class='w-[20px] h-[20px]'
          src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/random/uOp84rUFp0BqibMSQE891671105367.svg"
          alt=""
        />
      </div>
      <div>
        {extensionIsOn && (
          <div className="bg-[#F3F3F3] flowgiri-applicaiton fixed top-[35px] left-[35px] h-[100vh] w-[833px]">
            <Navbar />

            <Filter />

            <FlowContents />
          </div>
        )}
      </div>
    </>
  );
}

export default Main;
