let quantidade = 1;
valores = [];

while (quantidade <= 4){
    valor = parseFloat(prompt('Informe um valor'));
    valores.push(valor);
    quantidade +=1;
}

menor = Math.min(...valores);

console.log('O menor valor dos valores digitados é: ', menor);