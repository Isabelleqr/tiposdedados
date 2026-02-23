// String (Textos)

// 1
const nome = "Clint";
console.log(nome);

// 2
const sobrenome = "Barton";
console.log(nome + " " + sobrenome);

// 3
console.log(`Meu nome é ${nome} ${sobrenome}`);

// 4
const escola = "SENAI Guarulhos";
console.log(escola);

// 5
const parte1 = "Eu estudo na";
const parte2 = " área de programação.";
console.log(parte1 + parte2);

// 6
console.log(`Seja bem-vindo, ${nome}!`);

// 7
console.log(nome.length);

// 8
console.log(nome.toUpperCase());

// 9
console.log(nome.toLowerCase());

// 10
const cidade = "Brooklyn";
console.log(`Meu nome é ${nome} e moro em ${cidade}`);


// Number (Números)

// 1
const num1 = 35;
const num2 = 5;
console.log(num1 + num2);

// 2
console.log(num1 - num2);

// 3
console.log(num1 * num2);

// 4
console.log(num1 / num2);



// Boolean (Verdadeiro ou Falso)

// 1
const ativo = true;
console.log(ativo);

// 2
const numero = 15;
console.log(numero > 10);

// 3
const idade = 11;
console.log(idade >= 18);

// Objeto
// Um objeto agrupa várias informações 
let pessoa = {
    nome:"Jessica",
    idade: 17,
    cidade:"Mogi das Cruzes"
};
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);

let carro = {
    marca:"Fiat",
    modelo: "Fiat Cronos",
    ano: 2018
};
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);

//um array é uma lista q pode armazenar varios valores
let frutas = [ 'maçã', 'banana', 'uva' ];

console.log(frutas[0]);
console.table(frutas);

//adiciona ao final do array
frutas.push('morango');
console.log(frutas);
console.table(frutas);

//remove a ultima posição
frutas.pop(0);
console.table(frutas);

//remover da posição indicada (splice)
// frutas.splice(0);
// console.table(frutas);

//crie um array chamado animais e adicione 3 animais

let aminais = [ 'hamster', 'quokka', 'morcego' ];
console.table(aminais);
