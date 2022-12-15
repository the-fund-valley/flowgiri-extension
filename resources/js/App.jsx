
import React, { useEffect, useState } from 'react';
import RecoilNexus from "recoil-nexus";
import { RecoilRoot, } from 'recoil';
 import Main from './Main.jsx';

window.React = React
export default function App() {

    const [extensionIsOn, setExtensionIsOn] = useState(true)


    // useEffect(()=> {

    //     document.addEventListener('click', function(event) {
    //         const isOutside = event.target.closest('.flowgiri-applicaiton');

    //         if(!isOutside && extensionIsOn)  setExtensionIsOn(false)

    //         //if(!isOutside && !extensionIsOn)   setExtensionIsOn(true)


    //       })

    // },[])



    return (
        <RecoilRoot>
            <RecoilNexus />
              <Main />

        </RecoilRoot>


    );
}
