//TIPOS DE REFERÊNCIAS

/**- Object (Junta toda informação em apenas um lugar
 * onde você pode acessar a sua propriedade*/

//Criando um objeto(object)
let nome = "Samuel";
let sobrenome = "Oliveira";
let idade = 23;
let sexo = "Masculino";

//Sintaxe de um object 
let pessoa = {}; //Aqui temos um ojeto vázio

//Vamos criar um ojeto pessoa
let pessoa1 = {
    name: "Samuel",
    sobrenome: "Oliveira",
    idade: 23,
    sexo: "Masculino"
};

//Acessando uma propriedade e seu valor do objeto
console.log(pessoa1.idade);

//OBS: Em um ojeto sempre temos key(Chave) e value (Valor)
//Sempre colocar ponto no final, exeto no ultimo valor