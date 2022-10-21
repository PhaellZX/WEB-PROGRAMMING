/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F

*/
function getScore(score){
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 100
    let scoreC = score >= 70 && score <= 100
    let scoreD = score >= 60  && score <= 100
    let scoreF = score < 60 && score >= 0

    let scoreFinal

    if(scoreA){
        scoreFinal = 'A'

    } else if(scoreB){
        scoreFinal = 'B'

    } else if(scoreC){
        scoreFinal = 'C'

    }else if(scoreD){
        scoreFinal = 'D'

    }else if(scoreF){
        scoreFinal = 'F'

    } else {
        scoreFinal = 'Valor Inválido!'
    
    }
        return scoreFinal
    }

console.log(getScore(102))
console.log(getScore(89))
console.log(getScore(90))
console.log(getScore(60))
console.log(getScore(35))
console.log(getScore(73))