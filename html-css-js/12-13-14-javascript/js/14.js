function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
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

function validaCep(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let cepValido = /^[0-9]{5}-[0-9]{3}$/;
        if(this.value.match(cepValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
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
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

function validaUnidadeFederativa (elemento) {

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const uf = /[A-Z]{2}/;

        if (this.value.match(uf)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}



let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let campoCep = document.querySelectorAll('input.cep');
let camposEmail = document.querySelectorAll('input.email');
let validaUf = document.querySelectorAll('input.uf');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for( let emFoco of validaUf) {
    validaUnidadeFederativa(emFoco)
}

for( let emFoco of campoCep) {
    validaCep(emFoco)
}

