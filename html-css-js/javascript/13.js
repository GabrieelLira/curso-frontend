let n1 = document.querySelector('input#n1')
let n2 = document.querySelector('input#n2')
let n3 = document.querySelector('input#n3')
let n4 = document.querySelector('input#n4')
let aviso = document.querySelector('div#aviso')
let calcular = document.querySelector('input#calcular')
let limpar = document.querySelector('input#limpar')
let form = document.querySelector('form')


//Função para verificar se os números que forem colocados não sejam maior que 10 ou menor que 0
function validarNum(){
    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let num3 = Number(n3.value)
    let num4 = Number(n4.value)
    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10 || num3 < 0 || num3 > 10 || num4 < 0 || num4 > 10){
       form.reset()
        aviso.textContent = 'Digite uma nota entre 0 e 10'
        setTimeout(function(){
            aviso.textContent = ''
        }, 2000);
    }
}

//Função para calcular a média dos 4 números e dizer se a pessoa foi/está aprovado/recuperação/reprovado
function cal(){
    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let num3 = Number(n3.value)
    let num4 = Number(n4.value)
    let resclc = (num1 + num2 + num3 + num4) / 4
    document.getElementById('res').innerHTML = `Resultado: ${resclc}`
    if(resclc < 4){
        document.getElementById('res2').innerHTML = `Você foi REPROVADO!`
        res2.style.color = 'red'
    } else if(resclc < 7){
        document.getElementById('res2').innerHTML = `Você está em RECUPERAÇÂO!`
        res2.style.color = 'orange'
    } else {
        document.getElementById('res2').innerHTML = `Você foi APROVADO!`
        res2.style.color = 'green'
    }
}

//Função para zerar qualquer resultado
function limp(){
    form.reset()
    res.innerHTML = ''
    res2.innerHTML = ''
}