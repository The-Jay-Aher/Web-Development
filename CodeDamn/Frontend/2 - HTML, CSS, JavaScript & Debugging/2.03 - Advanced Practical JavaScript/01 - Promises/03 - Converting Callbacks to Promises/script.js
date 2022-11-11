const timer = document.querySelector('#time span');

setTimeout(() => {
	timer.innerText = new Date().toLocaleString();
}, 1000);


function promiseSetTimeout() {
    function fn() {
        
    }
    new Promise(fn)
}