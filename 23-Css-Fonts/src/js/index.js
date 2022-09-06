import '../scss/styles.scss';

var datamap = new Map([
    [document.getElementById("popupBtn"), document.getElementById("myPopup")],
    [document.getElementById("popupBtn1"), document.getElementById("myPopup1")],
    [document.getElementById("popupBtn2"), document.getElementById("myPopup2")],
    [document.getElementById("popupBtn3"), document.getElementById("myPopup3")],
    [document.getElementById("popupBtn4"), document.getElementById("myPopup4")],
    [document.getElementById("popupBtn5"), document.getElementById("myPopup5")],
]);

datamap.forEach((value, key) => {
    doPopup(key, value);
});

function doPopup(anchor, popupbox) {
    var span = popupbox.getElementsByClassName("popup__content--close")[0];
    anchor.addEventListener("click", function (event) {
        popupbox.style.display = "block";
    });
    span.addEventListener("click", function (event) {
        popupbox.style.display = "none";
    });
    window.addEventListener("click", function (event) {
        if (event.target == popupbox) {
            popupbox.style.display = "none";
        }
    });
}


function validaCampo(elemento){
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "Por favor, coloque seu nome no campo!";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    });
}
function validaEmail(elemento){
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "Obrigatório colocar seu Email para nos enviar uma mensagem!";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposEmail = document.querySelectorAll('input.email');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}