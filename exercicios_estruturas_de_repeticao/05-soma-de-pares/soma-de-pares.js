let soma = 0;
for (let i = 1; i <= 100; i++){
    console.log(i)
    if (i % 2 == 0){
        soma += i;
    }
}
console.log('A Soma dos pares é ', soma)