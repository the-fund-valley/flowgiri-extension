
import React, { useState } from 'react';
import RecoilNexus from "recoil-nexus";
import { RecoilRoot, } from 'recoil';
import Main from './Main.jsx';

window.React = React
export default function App() {

    const [extensionIsOn, setExtensionIsOn] = useState(false)


    return (
        <RecoilRoot>
            <RecoilNexus />
            <div onClick={()=>setExtensionIsOn(!extensionIsOn)} style={{width:'40px',height:'40px',display:'flex',justifyContent:'center', alignItems:'center'}}>
              <img src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/random/JtgY2zFvBX70iHBjDtGk1669292780.svg" alt="" />
           </div>
            {extensionIsOn &&   <Main />}

        </RecoilRoot>


    );
}
