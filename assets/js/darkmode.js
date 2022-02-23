document.addEventListener('DOMContentLoaded', init, false);

function init() {
    if ('serviceWorker' in navigator && navigator.onLine) {
        navigator.serviceWorker.register('./service-worker.js')
        .then((reg) => {
            console.log('Success Run Worker');
        }, (err) => {
            console.error('Failed Run Worker', err);
        });
    }
}

function dark(on_load){
    var theme = localStorage.theme
    if (on_load){
        if (theme == 'dark'){
            document.documentElement.classList.add('dark')
        }
        return 
    }
    
    if (theme == 'dark'){
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
    } else {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    }
}

function topFunc() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

var $root = $('html, body');

$('a[href^="#"]').click(function () {
    let redirect = $.attr(this, 'href')
    let margin = 100
    if (redirect == "#introduction" || redirect == "#get-items") {
        margin = 0
    }

    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - margin
    }, 500);

    return false;
});

dark(true)