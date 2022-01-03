//preencher uma matriz 3x3 com valores aleatorios
let test = Math.floor(Math.random()*(10 - 0 + 1) + 0)
let randomArr = [[],[],[]];

for(let i = 0; i<3;i++){
    for(let j = 0; j<3;j++){
        randomArr[j].push(test)
    }
    j = 0;
    console.log(randomArr)
    console.log("\n")
}
