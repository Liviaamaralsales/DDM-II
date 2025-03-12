function calc(){
    var peso = parseFloat(document.getElementById("peso").value);
    var Altura = parseFloat(document.getElementById("altura").value);
    var temp = Altura * Altura;
    var imc = peso / temp;
    var result = imc * 10000;

    if (result <= 18.5) {
        alert("Seu IMC é: " + result + ". Você está abaixo do peso.")
    } else if (result >= 18.6 && result <= 24.9) {
        alert("Seu IMC é: " + result + ". Você está no peso ideal.")
    } else if (result >= 25.0 && result <= 29.9) {
        alert("Seu IMC é: " + result + ". Você está com sobrepeso.")
    } else if (result >= 30.0 && result <= 34.9) {
        alert("Seu IMC é: " + result + ". Você está com obesidade grau I.")
    } else if (result >= 35.0 && result <= 39.9) {
        alert("Seu IMC é: " + result + ". Você está com obesidade grau II.")
    }  else {
        alert("Seu IMC é: " + result + ". Você está com obesidade grau III.")
    }
}