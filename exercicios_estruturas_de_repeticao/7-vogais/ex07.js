function contarVogais(str) {
let contador = 0;
const vogais = "aeiou";

for (const char of str.toLowerCase()) {
    if (vogais.includes(char)) {
    contador++;
    }
}

return contador;
}

console.log(contarVogais("Olá Mundo"));