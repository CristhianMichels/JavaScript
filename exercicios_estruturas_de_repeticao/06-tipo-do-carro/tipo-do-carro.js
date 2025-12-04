const carro = {
    marca : "Renault",
    modelo: "Kwid",
    ano : "2015",
    cor : "Branco"
}

for (let propriedade in carro){
    console.log(propriedade, carro[propriedade])
}