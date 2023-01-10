import $ from "jquery";

function addSideNav() {
  let flowgiriNav = `<div
        class="flowgiri-icon-area w-[40px] h-[40px] flex justify-center items-center cursor-pointer"
      >
        <img
        class='w-[20px] h-[20px]'
          src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/random/uOp84rUFp0BqibMSQE891671105367.svg"
          alt=""
        />
      </div>`;

  $(".left-sidebar-links").append(flowgiriNav);
}

let FlowGiriAppInterval = null;

function tryInitApp() {
  if (
    $(".left-sidebar-links").length &&
    !$("body").find(".flowgiri-icon-area").length
  ) {
    clearTimeout(FlowGiriAppInterval);
    addSideNav();
  }
}

$(document).ready(function () {
  setTimeout(function () {
    let div = `<div  id='flowgiri-app-container'>
                  <div id="flowgiri-extension" class="z-[9999] bg-[#F3F3F3] flowgiri-applicaiton fixed top-[35px]  h-[98vh] w-[833px]">
                     <iframe src="https://flowgiri.com/extension-check"  class="h-[100%] w-[100%]"></iframe>
                   </div>
                   <div id='flowgiri-app-bg' class='flowgiri-app-bg  z-[99]  fixed top-0 bottom-0 right-0 left-[33px] bg-[rgba(0,0,0,.2)]'></div>
                </div>`;

    setTimeout(() => {
      $("body").append(div);
    }, 300);
  }, 3000);

  $("body").on("click", ".left-sidebar-links", function () {
    FlowGiriAppInterval = setInterval(tryInitApp, 100);
  });

  $("body").on("click", ".flowgiri-icon-area", function () {
    $("body").find("#flowgiri-extension").toggleClass("active");
  });

  $("body").on("click", "#flowgiri-app-bg", function () {
    $("body").find("#flowgiri-extension").toggleClass("active");
  });
});

FlowGiriAppInterval = setInterval(tryInitApp, 100);
