// === FORMA ALTERNATIVA PARA CRIAÇÃO DE OBJETOS: ===

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


// === "Moldes" para criar objetos ===

//Factory Functions
function criarPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome}  ${this.sobrenome}`
        }
    }
}

//Constructor Functions

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
};

let p1 = new Pessoa('Gustavo','Pedro');


//Object.freeze() --> trava o objeto


//Object.defineProperty(this, 'estoque',{ --> Basicamente usado para criar valores dentro do objeto, mas de forma mais segura
//    enumerable: true, --> Mostra a chave
//    value: estoque, --> É o valor
//    writable:false, --> Pode alterar?
//    configurable:true --> Pode reconfigurar?
//})