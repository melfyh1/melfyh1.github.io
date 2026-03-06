let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let planet1 = document.getElementById('planet1');
let text = document.getElementById('text');



window.addEventListener('scroll', function(){
    let value = window.scrollY;

    stars.style.left = value * 0.25 + 'px';
    moon.style.left = value * 0.5 + 'px';
    moon.style.top = value * 1.05 + 'px';
    planet1.style.top = -value * 2 + 'px';
    planet1.style.left = -value * 2 + 'px';
    text.style.marginRight = value * 3 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
});