const parag = document.querySelector(".container")
const ps = parag.querySelectorAll('p');
const estilos = getComputedStyle(document.body);
const backdgroundCB = estilos.backgroundColor;

for(let i = 0;i<ps.length;i++){
    ps[i].style.backgroundColor=backdgroundCB
    ps[i].style.color ='white'
}
