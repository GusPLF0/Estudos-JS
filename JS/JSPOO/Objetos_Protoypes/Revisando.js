// FORMA ALTERNATIVA PARA CRIAÇÃO DE OBJETOS: 

// const pessoa1 = new Object();
// pessoa1.nome = 'Gustavo';
// pessoa1.sobrenome = 'Lima';

const pessoa = {
    nome:'Gustavo',
    sobrenome:'Lima',
    falarNome: function(){
        return (`Olá ${this.nome}`)
    },
};

// Notações 
console.log(pessoa.nome);
console.log(pessoa['sobrenome']);
console.log(pessoa.falarNome());