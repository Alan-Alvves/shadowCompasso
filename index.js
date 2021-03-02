console.log('----------------------VARIAVEIS-------------------------------')
/* VARIAVEIS */
var numero = 1;
var string = 'a';
var bolean = true;
var objeto = {
    nome: 'alan',
    idade: '20'
};

console.log(typeof numero, numero);
console.log(typeof string, string);
console.log(typeof bolean, bolean);
console.log(typeof objeto, objeto)
console.log('----------------------OPERADORES-------------------------------')
/* OPERADORES */
/* '+' = SOMA/CONCATENAÇÃO*/
var n1 = 5;
var n2 = 3;

var soma = n1 + n2;
console.log(`n1=${n1},n2=${n2},soma=${soma}`)

var nome = 'Alan';
var sobrenome = 'Alves';

console.log(nome + sobrenome);

/* SUBTRAÇÃO */
var n3 = 5;
var n4 = 3;

var subtracao = n3 - n4;
console.log(`n3=${n3},n4=${n4},subtracao=${subtracao}`)

/* MULTIPLICAÇÃO */
var n5 = 5;
var n6 = 3;

var mutiplicacao = n5 * n6;
console.log(`n6=${n5},n6=${n6},mutiplicacao=${mutiplicacao}`)

/* DIVISÃO */
var n7 = 10;
var n8 = 2;

var divisao = n7 / n8;
console.log(`n7=${n7},n8=${n8},divisao=${divisao}`)
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

