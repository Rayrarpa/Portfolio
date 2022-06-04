const btnTop = document.getElementById("btn-top");

function onScroll() {
    if (scrollY > 385) {
        btnTop.classList.add('show');
    } else {
        btnTop.classList.remove('show');
    }
}

btnTop.addEventListener('click', (e) => {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, '300');
})