console.log('----------------------LOOPS-------------------------------')

var pessoas = [{
    nome: 'alan',
    idade: '20'
},{
    nome: 'lucas',
    idade: '15',
},{
    nome: 'domi',
    idade: '13'
}
]

var funcaoLoop = function(){
    for (i = 0; i < pessoas.length; i++){
        var maiorDe = pessoas[i]
        if(maiorDe.idade < 18){
            console.log(`${maiorDe.nome} ele tem ${maiorDe.idade} então é menor de idade`)
        }else if (maiorDe.idade >= 18){
            console.log(`${maiorDe.nome} ele tem ${maiorDe.idade} então é maior de idade`)}

    }}

funcaoLoop()