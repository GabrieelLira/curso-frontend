function ver(){
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)
    var num3 = Number(document.getElementById('num3').value)
    var res = (num1 + num2 + num3) / 3 
    document.getElementById('res').innerHTML = `Resultado: ${res}` 
  } 