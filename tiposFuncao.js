/**No JS temos dois tipos de funções:
 * A primeira é a que realiza uma tarefa e não devolve valor(resultado),
 * e a segunda devolve um determinado valor(resultado)
 */

//OBS: Veja as saídas no DevTools

//FUNÇÃO QUE NÃO DEVOLVE VALOR
//Essa função realiza uma tarefa, mas não devolve nada
function dizerNome() {
    console.log('Samuel');
};

dizerNome();//Executando a função.

//FUNÇÃO DEVOLVENDO VALOR PARA SER USADO EM ALGUM "LUGAR"
//Essa função realiza um calculo e retorna o resultado
function multiplicarPorDois(valor) {
  return  valor * 2; //return como o proprio nome diz, retorna algo
};

console.log(multiplicarPorDois(5));//Exibindo resultado, e passando valor(5) como parâmetro.

//A diferença é que podemos usar funções que retornam algo
//Exemlo: pegamos o resultado da função e colocamos em uma variável

let resultado = multiplicarPorDois(5);//Passando valor(5) como parâmetro
console.log(resultado);//Exibindo o resultado.