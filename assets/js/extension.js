

setTimeout(function (){

    let iframe = document.createElement('iframe');
    iframe.id = "extension-iframe"
    iframe.onload = function() {
        document.getElementById('extension-iframe').classList.remove('hidden')
        document.getElementById('load').classList.add('hidden')
    };

    iframe.src = 'https://flowgiri.com/extension';
    iframe.classList.add('hidden');

    document.getElementById('extension-app-area').innerHTML = '';
    document.getElementById('extension-app-area').appendChild(iframe)

}, 500)