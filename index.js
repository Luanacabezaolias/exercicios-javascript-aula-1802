// Exercício 1: Arrow Function com um parâmetro
const dobro = num => num * 2;

console.log(dobro(7));  // 14
console.log(dobro(15)); // 30


// Exercício 2: Arrow Function com múltiplos parâmetros
const dividir = (a, b) => a / b;

console.log(dividir(10, 2)); // 5
console.log(dividir(9, 3));  // 3

//Exercício 3: Arrow Function com múltiplas linhas
const mensagemBoasVindas = nome => {
    return `Seja bem-vindo, ${nome}!`;
};

console.log(mensagemBoasVindas("Carlos")); // "Seja bem-vindo, Carlos!"
console.log(mensagemBoasVindas("Ana"));    // "Seja bem-vindo, Ana!"

//Exercício 4: Higher-Order Function personalizada
const executarOperacao = (a, b, operacao) => operacao(a, b);

console.log(executarOperacao(6, 3, (a, b) => a - b)); // 3
console.log(executarOperacao(4, 5, (a, b) => a * b)); // 20

//Exercício 5: map() – Transformação de um array
const precos = [100, 200, 300, 400];

const precosComDesconto = precos.map(preco => preco * 0.9);

console.log(precosComDesconto); // [90, 180, 270, 360]

//Exercício 6: filter() – Filtrando valores em um array
const idades = [12, 19, 17, 22, 14, 30];

const menoresDeIdade = idades.filter(idade => idade < 18);

console.log(menoresDeIdade); // [12, 17, 14]

//Exercício 7: reduce() – Somando valores de um array
const numeros = [2, 3, 4, 5];

const produto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);

console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)