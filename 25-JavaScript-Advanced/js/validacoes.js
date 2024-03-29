validaCampo = (elemento) =>{
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

validaEmail = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento do campo de e-mail";
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

