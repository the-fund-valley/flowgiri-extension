
import React, { useEffect, useState } from 'react';
import RecoilNexus from "recoil-nexus";
import { RecoilRoot, } from 'recoil';
 import Main from './Main.jsx';

window.React = React
export default function App() {


    return (
        <RecoilRoot>
            <RecoilNexus />
              <Main />
        </RecoilRoot>


    );
}
