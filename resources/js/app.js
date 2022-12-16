import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import $ from "jquery";

function FlowGiriInit() {

    if (document.getElementById('flowGiriApp')) {
        ReactDOM.render(
            <App/>,
            document.getElementById('flowGiriApp')
        );

    }
}


    setTimeout(function (){
        let div = '<div id="flowGiriApp"> </div>';

        $(".left-sidebar-links").append(div);

        FlowGiriInit();

    }, 4000)


