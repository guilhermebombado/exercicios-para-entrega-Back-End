
let nota1 = 9;
let nota2 = 8;
let nota3 = 7;


let media = (nota1 + nota2 + nota3) / 3;


let status;
if (media >= 6) {
    status = "Aprovado";
} else if (media > 4 && media < 6) {
    status = "Exame";
} else {
    status = "Reprovado";
}


console.log("A média do aluno é:", media.toFixed(2));
console.log("Status do aluno:", status);