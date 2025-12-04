contador = 0;

for (let i = 1; i <= 12; ++i){

    let valor = parseFloat(prompt('Digite um valor'));

    if (valor >= 30 && valor <= 60){
        contador +=1;
    }
}

console.log('Quantidade de números entre 30 e 60: ', contador);