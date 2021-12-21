let oioioi = document.querySelector(".container")

const data = new Date();


let dia = data.getDate();
let mes = data.getMonth();
mes = converterMes(mes);
let ano = data.getFullYear();
let hora = data.getHours();
let minutos = data.getMinutes();
let diaSemana = data.getDay();
diaSemana = converterDiaSemana(diaSemana)

    
function converterMes(mess){
    switch(mess){
        case 1: 
            return "Janeiro"; 
        case 2:
            return "Fevereiro";
        case 3: 
            return "Março";
        case 4: 
            return "Abril";
        case 5: 
            return "Maio";
        case 6: 
            return "Junho";
        case 7: 
            return "Julho";
        case 8: 
            return "Agosto";
        case 9: 
            return "Setembro";
        case 10: 
            return "Outubro";
        case 11: 
            return "Novembro";
        case 12: 
            return "Dezembro;";
        default: 
            return undefined;
    }
}

function converterDiaSemana(semm){
    switch(semm){
        case 0: 
            return "domingo"; 
        case 1:
            return "segunda-feira";
        case 2: 
            return "terça-feira";
        case 3: 
            return "quarta-feira";
        case 4: 
            return "quinta-feira";
        case 5: 
            return "sexta-feira";
        case 6: 
            return "sabado";
        default: 
            return undefined;
    }
}

const p = document.createElement('h1');
p.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano} <br>${hora}:${minutos}`;
oioioi.appendChild(p)


