class Calculo {
    constructor() {
        this.arrayNumeros = [];
    }

    enviar(){ 
        let numeros = this.dados(); 
        this.adicionar(numeros); 
        this.resultado() 
    }
 
    // Função para calcular o resultado
    resultado(){ 
        let res = document.getElementById('resultado')
        res.innerText = ''
        if(this.dados() === false){
            document.getElementById('formulario-01').style = 'border: 1px solid red'
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos";
            res.innerText = ''
        } else{
            document.getElementById('formulario-01').style = 'border: '
            for (let i = 0; i < this.arrayNumeros.length; i++){
                let soma = Number(this.arrayNumeros[i].n1) + Number(this.arrayNumeros[i].n2) + Number(this.arrayNumeros[i].n3) + Number(this.arrayNumeros[i].n4) 
                let media = soma / 4
                let condicao = media >= 8 ? "aprovado" : "reprovado";
                document.querySelector('.mensagem').innerHTML = "";
                res.innerText = `Média: ${media}  / Resultado: ${condicao}` 
            }
        }
    }  
     
     
    //Função para dar push nos campos
    adicionar(numeros){ this.arrayNumeros.push(numeros) } 

    //puxando os value para fazer um array
    dados(){   
        let numeros = []
        numeros.resultado = this.resultado;
        numeros.n1 = document.getElementById('n1').value;
        numeros.n2 = document.getElementById('n2').value;
        numeros.n3 = document.getElementById('n3').value;
        numeros.n4 = document.getElementById('n4').value;
        for (let i in numeros){ 
            if(numeros[i] == '' || numeros[i] > 10 || numeros[i] < 0){
        
                return false
            } 
        } return numeros;
    }
}
 
 var calculo = new Calculo();

 function validaCampoNumerico(elemento){
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 
        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
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

let camposNumericos = document.querySelectorAll('input.numeros');
for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}