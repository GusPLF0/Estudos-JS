function meuEscopo(){
    const form = document.querySelector('.form')
    const result = document.querySelector(".resultado")

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        let nome = form.querySelector(".nome") //nome.value
        let sobrenome = form.querySelector(".sobrenome")
        let peso = form.querySelector(".peso")
        let altura = form.querySelector(".altura")

        let obj = {
            nome : nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
       }

        pessoas.push(obj)

        result.innerHTML += `<br />${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} <br />`

        console.log(pessoas)
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();