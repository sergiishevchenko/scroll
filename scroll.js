// scroll

let nav = document.getElementsByTagName('UL')[0]; // refer to the element with the tag 'ul'
nav.addEventListener('click', function(event) {
    if (event.target.tagName == 'A') {
        event.preventDefault(); // cancel the default action
        let ev = event.target.getAttribute('href'); // search attribute
        ev = ev.slice(1); // delete #
        let link = document.getElementById(ev); // search element with ev's id 
        let coordinates = link.getBoundingClientRect().top,
            i = 1;
        function scroll() {
            let req = requestAnimationFrame(scroll); // make request
            i++; // increment
            window.scrollBy(0, coordinates/30); // create pace
            if (i == 30) {
                cancelAnimationFrame(req); // finish animation with i = 30 
            }
        }
        scroll();
    }
});