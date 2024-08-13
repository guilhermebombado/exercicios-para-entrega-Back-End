
let consumoWattsPorHora = 1750; 
let horasPorDia = 8; 
let diasPorMes = 25; 
let custoPorKWh = 0.75; 


let consumoKWhPorHora = consumoWattsPorHora / 1000;


let consumoKWhPorMes = consumoKWhPorHora * horasPorDia * diasPorMes;


let custoMensal = consumoKWhPorMes * custoPorKWh;


console.log("O custo mensal com energia é: R$", custoMensal.toFixed(2));
