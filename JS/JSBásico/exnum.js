let num = Number(prompt("Digite seu número"));
let numTitulo = document.getElementById("num-titu");
let text = document.getElementById("texto");



numTitulo.innerHTML = num

text.innerHTML = 
`

Raiz quadrada:  ${num**0.5} <br />
<br />
${num} é inteiro: ${Number.isInteger(num)} <br />
<br />
É NaN: ${isNaN(num)} <br />
<br />
Arredondando para baixo: ${Math.floor(num)} <br />
<br />
Arrendondo para cima: ${Math.ceil(num)}
`