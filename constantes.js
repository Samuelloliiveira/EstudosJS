/*let e var pode fazer retribuição de valor
enquanto numa constante o valor não pode ser alterado
*/
const cidade = 'Camaçari'; /*É importante utilizar const para declarar nossas variáveis, 
                            porque assim conseguimos um comportamento mais previsível, 
                            já que o valor que elas recebem não podem ser alterado*/

cidade = "Salvador";/*Se eu tentar mudar o valor da váriavel vai dá erro
                    constante não pode ser modificada*/
console.log(cidade);//Exibindo saída (obs: Use o devtools para visualizar)

/*É uma boa prática usar const para declarar variáves.
Usar let somente quando o valor da variável vai precisar ser alterado.
Evitar usar var já que é uma forma mais "antiga" de declaração.
*/