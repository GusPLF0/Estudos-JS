const elemento = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

let pag = document.querySelector(".container")
let div1 = document.createElement('div');
pag.appendChild(div1);


for(let i = 0;i<elemento.length;i++){
    let tags = document.createElement(elemento[i].tag);
    tags.innerHTML = elemento[i].texto;
    div1.appendChild(tags);
}