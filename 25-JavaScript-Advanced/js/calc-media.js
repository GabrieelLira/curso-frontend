/**
 * fiz essas const para não ter que ficar puxando esses key toda vez que eu ia fazer uma validação
 */
const res = document.getElementById('resultado')
const n1 = document.getElementById('n1')
const n2 = document.getElementById('n2')
const n3 = document.getElementById('n3')
const n4 = document.getElementById('n4')


class Calculo {
    constructor() {
        this.arrayNumeros = [];
    }
    enviar() {
        let numeros = this.dados();
        this.adicionar(numeros)
        this.resultado()
        if(this.validaDados(numeros)){
            this.adicionar(numeros)
        }
        if(this.validaDados2(numeros)){
            this.adicionar(numeros)
          
        }
        if(this.validaDados3(numeros)){
            this.adicionar(numeros)
            
        }
        if(this.validaDados4(numeros)){
            this.adicionar(numeros)
        }
    }


    /**
     * Função para calcular o resultado
     */
    resultado(){
        let res = document.getElementById('resultado')
        for (let i = 0; i < this.arrayNumeros.length; i++){
            let soma = Number(this.arrayNumeros[i].n1) + Number(this.arrayNumeros[i].n2) + Number(this.arrayNumeros[i].n3) + Number(this.arrayNumeros[i].n4) 
            res.innerText = soma / 4
        }
    }  
    

    /**
     * Função para dar push nos campos
     */
    adicionar(numeros){ 
        this.arrayNumeros.push(numeros)
    }


    /**
     * Não consegui fazer a validação dos campos de outro jeito a não ser puxar uma por uma
     */
    validaDados(numeros){
        if(numeros.n1 == '' || numeros.n1 > 10 || numeros.n1 < 0){
        n1.style = 'border: 1px solid red'
        res.innerHTML = '';
        return false
        }
        else{
            n1.style = 'border: 1px solid black'
        return true
    }}
    validaDados2(numeros){
        if(numeros.n2 == '' || numeros.n2 > 10 || numeros.n2 < 0){
        n2.style = 'border: 1px solid red'
        res.innerHTML = '';
        return false
        }
        else{
            n2.style = 'border: 1px solid black'
        return true
    }}
    validaDados3(numeros){
        if(numeros.n3 == '' || numeros.n3 > 10 || numeros.n3 < 0){
        n3.style = 'border: 1px solid red'
        res.innerHTML = '';
        return false
        }
        else{
            n3.style = 'border: 1px solid black'
        return true
    }}
    validaDados4(numeros){
        if(numeros.n4 == '' || numeros.n4 > 10 || numeros.n4 < 0){
        n4.style = 'border: 1px solid red'
        res.innerHTML = '';
        return false
        }
        else{
            n4.style = 'border: 1px solid black'
        return true
    }}
    
    /**
     * puxando os value para fazer um array
     */
    dados(){
        let numeros = {}
        numeros.resultado = this.resultado;
        numeros.n1 = document.getElementById('n1').value;
        numeros.n2 = document.getElementById('n2').value;
        numeros.n3 = document.getElementById('n3').value;
        numeros.n4 = document.getElementById('n4').value;
        return numeros;
    }
}

var calculo = new Calculo();