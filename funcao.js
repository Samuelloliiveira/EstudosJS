/**Uma função faz parte de todo Software
 * Ela executa todo o fluco de entrada e saída.
 * Exemplo: Ao clicar em um botão conseguimos submeter 
 * nosso dado do formulário para o banco, nesse exemplo 
 * uma função fica responsavel por vadidar esses dados,
 * podendo ter muitas outras, como: validar, alterar, excluir, etc.
 */

//OBS: A melhor forma de nomear uma função é sempre com um verbo + um substantivo

let corSite = "Azul";

//Exemplo de como declaramos uma função
 function resetaCor() {
    corSite = ""; //Estou resetando a cor de um site para vázio
 };

//Veja o Devtools as mudanças.

 console.log(corSite);//Executando essa primeira vez o site está azul
 resetaCor(); //Aqui estamos declarando(chamando) a função
 console.log(corSite);//Executando novamente o site já está sem cor

//FUNÇÃO COM PARÂMETROS
//São funções que passam valores dentro dos Parêntese
//Exemplo: 
function resetaCor1(cor) {//Aqui dentro do Parêntese está nosso parâmentro
                        //Ou seja entrada de dados
    corSite = cor;//E aqui estão os argumentos 
};

console.log(corSite);//Aqui ele mostra a cor normal(Azul) do site
resetaCor1("vermelho");//Aqui passamos para a função resetaCor1 um valor(Vermelho) como parãmetro
console.log(corSite);//Se executarmos novamente a nova cor do site sera Vermelho. 

//PODEMOS PASSAR MAIS DE UM PARÂMETRO PARA UMA FUNÇÃO
//Exemplo:
function resetaCor2(cor,tonalidade) {
    corSite = cor + ' ' + tonalidade; //O sinal de mais(+) aqui significa Concatenar
                                    // ' ' é o espaço entre verde e claro. Veja no Devtools
};
//OBS: Devemos ter cuidado ao usar mais(+) para concatenar, pois o mesmo é usado para operações matématicas

console.log(corSite);//Aqui ele mostra a cor normal(Azul) do site
resetaCor2("verde","claro");//Passando dois parâmetro para essa função
console.log(corSite);//Se executarmos novamente a nova cor do site sera verde claro. 

