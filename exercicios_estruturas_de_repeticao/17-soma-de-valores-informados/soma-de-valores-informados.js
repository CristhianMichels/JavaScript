let intervalo = parseInt(prompt("Digite o fim do intervalo"));
let soma = 0;

for (let i = 1; i <= intervalo; ++i){
    if (i % 2 == 0){
        soma += i;
    }
}

console.log(`A soma de todos os valores pares entre 1 e ${intervalo} é ${soma}`);