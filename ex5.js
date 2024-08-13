
var variavelVarGlobal = 'Variável com var fora do bloco';


let variavelLetGlobal = 'Variável com let fora do bloco';

if (true) {
  
    var variavelVarLocal = 'Variável com var dentro do bloco';
    

    let variavelLetLocal = 'Variável com let dentro do bloco';
    
    
    console.log('Dentro do bloco:');
    console.log(variavelVarGlobal); 
    console.log(variavelLetGlobal); 
    console.log(variavelVarLocal);  
    console.log(variavelLetLocal);  
}

console.log('Fora do bloco:');
console.log(variavelVarGlobal); 
console.log(variavelLetGlobal); 
console.log(variavelVarLocal);  
console.log(variavelLetLocal);  
