/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.*/

let family = {
    incomes: [1200.65, 500.85, 900.55],
    expenses:[100.55, 10.90, 90.90]
}

function sum(array){
    let total = 0

    for(let value of array){
        total += value

    }
    return total
}

function calculate(family){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = (calculateIncomes - calculateExpenses)
    let IncomesPositive = total >= 0
    
    if(IncomesPositive){
        result = `Sua receita está no positivo com saldo de ${total}`
    
    } else {
        result = `Sua receita está no negativo com saldo de R$${total}.`
   
    }
    return result
}

console.log(calculate(family))