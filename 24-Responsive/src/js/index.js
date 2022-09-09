import '../scss/styles.scss';

var datamap = new Map([
    [document.getElementById("registrationBtn"), document.getElementById("registration")]
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
            document.querySelector('.popup__content--erro').innerHTML = "Obrigatório preencher o campo para se registrar!";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.popup__content--erro').innerHTML = "";
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
            document.querySelector('.popup__content--erro').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.popup__content--erro').innerHTML = "Obrigatório utilizar um e-mail valido para se registrar!";
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
