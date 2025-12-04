let valor = 7;
let chute;
do{
    chute = Number(prompt('Chute o valor que eu pensei: ')); 
} while (valor !== chute);
console.log('Parabéns, o número que eu pensei era ' , valor);