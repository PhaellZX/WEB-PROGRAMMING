//1 - Declare uma variável de nome weight

let weight = 70.5
console.log(weight)

//2 - Que tipo de dado é a variável acima?

console.log(typeof weight)

/*
    3 - Declare uma variável e atribua 
    valores para cada um dos dados:
        * name:String
        * age: Number(Integer)
        * weight: Number (float)
        * isSubdcribed: Boolean
*/  

let person = {
    name: 'Ana',
    age: 26,
    weight: 45.5,
    isSubscribed: true
}
console.log(person)

/*4 - A variável student abaixo é de que 
      tipo de dados?*/

//console.log(typeof student) 

/*4.1 - Atribua a ela as mesmas propriedades
        e valores do exercícios 3*/

let student = {
    name: 'Carlos',
    age: 28,
    weight: 80.3,
    isSubscribed: false
}
console.log(student)

/*4.2 - Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> Kg.*/

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}Kg.`)

/* 5 - Declare uma váriavel do tipo Array, de nome
       students e atribua a la nenhum valor, ou seja
       somente o Array vazio*/
       
let students = []
console.log(students)

/* 6 - Reatribua valor para a variável acima, colocando
       dentro dela o objeto student da questão 4.(Não copiar
       e colar o objeto, mas usar o objeto criado e inserir ele
       no Array)*/

students = [
    student
]
console.log(students)

/* 7 - Coloque no console o valor da posição
       zero do Array acima*/

console.log(students[0])

/* 8 - Crie um novo student e coloque na posição
       1 do Array students */

const student2 = {
    name:'Karla',
    age:20,
    weight:45.4,
    isSubscribed: true
}
students = [
    student,
    student2
]
// OU students[1] = student2

console.log(students)


