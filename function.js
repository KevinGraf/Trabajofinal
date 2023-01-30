let hideText_btn = document.getElementById ('hideText_btns');
let hideText = document.getElementById ('hideText')
hideText_btn.addEventListener ('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');
    

    if (hideText.classList.contains('show')){
        hideText_btn.innerHTML='Ocultar';
    }
    else{
        hideText_btn.innerHTML='Mostrar';
    }
}

let listText_btn = document.getElementById ('listText_btns');
let lioculta = document.getElementById ('lioculta')
listText_btn.addEventListener ('click', toggleList);

function toggleList() {
    lioculta.classList.toggle('Mostrar2');
    

    if (hideText.classList.contains('Mostrar2')){
        listText_btn.innerHTML='Ocultar2';
    }
    else{
        listText_btn.innerHTML='Mostrar2';
    }
}

let xpText_btn = document.getElementById ('xpText_btns');
let xp = document.getElementById ('xp')
xpText_btn.addEventListener ('click', togglexp);

function togglexp() {
    xp.classList.toggle('Mostrar3');
    

    if (hideText.classList.contains('Mostrar3')){
        xpText_btns.innerHTML='Ocultar3';
    }
    else{
        xpText_btns.innerHTML='Mostrar3';
    }
}
