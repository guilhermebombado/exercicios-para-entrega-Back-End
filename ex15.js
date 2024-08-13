function calcularIMC(peso, altura) {
    
    let imc = peso / (altura * altura);

    
    let categoria;
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    
    console.log("IMC:", imc.toFixed(2));
    console.log("Categoria:", categoria);
}


let peso = 100; 
let altura = 1.75; 
calcularIMC(peso, altura);