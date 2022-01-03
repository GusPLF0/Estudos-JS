const pessoas = [
    {nome:'Dio', idade: 30},
    {nome:'Tom', idade: 20},
    {nome:'Mel', idade: 14},
    {nome:'Ben', idade: 19},
    {nome:'Jack', idade: 45},
    {nome:'Luin', idade: 12},
    {nome:'Luiza', idade: 87},
    {nome:'Clince', idade: 13},
    {nome:'Joe', idade: 55},
    {nome:'Carl', idade: 63},
    {nome:'Claudio', idade: 56},
]


// let Idade50 = pessoas.filter(obj=>obj.idade>50)

// console.log(Idade50)

// Retorne a mais velha:


let maisVelha = pessoas.reduce((cont,obj)=>{
    if(obj.idade>cont){
        cont = obj.idade
    }
    return cont;
},0)
console.log(maisVelha)