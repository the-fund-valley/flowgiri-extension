
import React, { useEffect, useState } from 'react';
import RecoilNexus from "recoil-nexus";
import { RecoilRoot, } from 'recoil';
 import Main from './Main.jsx';

window.React = React
export default function App() {

    const [extensionIsOn, setExtensionIsOn] = useState(false)


    useEffect(()=> {

        document.addEventListener('click', function(event) {
            const isOutside = event.target.closest('.flowgiri-applicaiton');

            //if(!isOutside && extensionIsOn)  setExtensionIsOn(false)


          })

    },[])



    return (
        <RecoilRoot>
            <RecoilNexus />
            <div onClick={ ()=> setExtensionIsOn(!extensionIsOn) } class='flowgiri-icon-area'  style={{width:'40px',height:'40px',display:'flex',justifyContent:'center', alignItems:'center'}}>
              <img   src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/random/JtgY2zFvBX70iHBjDtGk1669292780.svg" alt="" />
           </div>
             {extensionIsOn &&   <Main />}

        </RecoilRoot>


    );
}
