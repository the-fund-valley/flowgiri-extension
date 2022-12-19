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

function addSideNav() {
    let flowgiriNav = ` <div 
        class="flowgiri-icon-area"
        style="
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer
        "
      >
        <img
        class='w-[20px] h-[20px]'
          src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/random/uOp84rUFp0BqibMSQE891671105367.svg"
          alt=""
        />
      </div>`

    $(".left-sidebar-links").append(flowgiriNav)
}

let FlowGiriAppInterval = null;

function tryInitApp() {

    if ($(".left-sidebar-links").length && !$('body').find('.flowgiri-icon-area').length) {
        clearTimeout(FlowGiriAppInterval)
        addSideNav()
    }

}

$(document).ready(function () {

    setTimeout(function () {

        let div = '<div id="flowGiriApp"> </div>';

        setTimeout(() => {
            $("body").append(div);

            FlowGiriInit();
        }, 300)

    }, 1000)


    $('body').on('click', ".left-sidebar-links", function () {
        FlowGiriAppInterval = setInterval(tryInitApp, 100)
    });

    let toggleAPp = false;

    $('body').on('click', ".flowgiri-icon-area", function () {

        toggleAPp = !toggleAPp;

        postMessage({
            author: 'besnik-flowgiri-app-toggle',
            toggle: toggleAPp
        }, '*')

    });


    document.addEventListener('click', function(event) {
          const isOutside = $(event.target).closest('#flowgiri-app-container');

         if(!isOutside.length && toggleAPp && !$(event.target).closest('.flowgiri-icon-area').length) {
             postMessage({
                 author: 'besnik-flowgiri-app-toggle',
                 toggle: false
             }, '*')

             toggleAPp = false ;
         }

    })


    $("body").on('click', '#flowgiri-app-bg', function () {
        postMessage({
            author: 'besnik-flowgiri-app-toggle',
            toggle: false
        }, '*')
        toggleAPp = false ;
    })


    // $("body").on('click', 'div[data-automation-id="left-sidebar-add-button"]', function () {
    //     alert("oko")
    // })

})



var login = document.getElementById("login");
var register = document.getElementById("register");
var $token = localStorage.getItem("browserToken");
login.setAttribute('href', "http://127.0.0.1:8000/login?token="+$token);
register.setAttribute('href', "http://127.0.0.1:8000/register?token="+$token);

FlowGiriAppInterval = setInterval(tryInitApp, 100)







