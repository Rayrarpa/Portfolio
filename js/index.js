const btnTop = document.getElementById("btn-top");
let abilityItensTitles = [];
const abilityItem = document.getElementsByClassName("list-ability-itens")

for (let i = 0; i < abilityItem.length; i++) {
    let item = abilityItem[i];
    abilityItensTitles.push(item.title);
}

for (let i = 0; i < abilityItem.length; i++) {
    abilityItem[i].setAttribute('data-content', abilityItensTitles[i])
}

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

