console.log('----------------------CONDICIONAIS-------------------------------')
/* CONDICIONAIS */
var pessoa = {
    nome:'lucas',
    sexo: "masculino",
    idade: 14,
    maiorDeIdade: false,
    altura: 1.43
};

if (pessoa.idade >= 18){
    console.log('Ele é maior de idade')
    pessoa.maiorDeIdade = true
    console.log(pessoa.maiorDeIdade)
} else {
    console.log('Ele é menor de idade')
    console.log(pessoa.maiorDeIdade)
}

if (pessoa.sexo == 'masculino' ){
    console.log('O sexo dele é masculino')
}

if (pessoa.altura > 1.70){
    console.log(`${pessoa.nome} é grande`)
}else if (pessoa.altura > 1.56 && pessoa.altura < 1.69){
    console.log(`${pessoa.nome} é medio `)
}else {
    console.log(`${pessoa.nome} tem menos de 1.56 então é pequeno`)
}