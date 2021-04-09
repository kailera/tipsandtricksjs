let data = "100 80 90 10 123 31243 5435 121 44 41 424 579";

// funcao que torna a string em um array ordenado
const turnToArray = (data) =>  data.split(" ").sort();

//string to int 

let stringToInt = turnToArray(data)
    .map((x)=> x * 1)

console.log(stringToInt)

// map-> multiplicar todos os dados 

let multiplyByTwo = turnToArray(data)
    .map((x) => x*2);

console.log(multiplyByTwo);

// filtrar os numeros pares

let filterPairs = turnToArray(data)
    .filter((number)=> number % 2 ===0);

console.log(`Pairs: ${filterPairs}`);



/*  Desenvolvido por Samuel Ferreira em 09/04/2021  
    Última Atualização: 09/04/2021
    Playlist: Nenhuma
*/
