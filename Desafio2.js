const readline = require("readline");

function calcularSaldoRanqueadas(vitorias, derrotas) {
 // Calcula o saldo de partidas ranqueadas
 const saldo = vitorias - derrotas;

 // Atribui um nível ao jogador com base no saldo
 let nivel;
 if (saldo < 10) {
   nivel = "Ferro";
 } else if (saldo >= 10 && saldo < 21) {
   nivel = "Bronze";
 } else if (saldo >= 21 && saldo < 51) {
   nivel = "Prata";
 } else if (saldo >= 51 && saldo < 81) {
   nivel = "Ouro";
 } else if (saldo >= 81 && saldo < 91) {
   nivel = "Diamante";
 } else if (saldo >= 91 && saldo < 101) {
   nivel = "Lendário";
 } else if (saldo >= 101) {
   nivel = "Imortal";
 }

 // Retorna o saldo e o nível do jogador
 return [saldo, nivel];
}

// Exemplo de uso
const reader = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

reader.question("Digite a quantidade de vitórias: ", (vitorias) => {
 reader.question("Digite a quantidade de derrotas: ", (derrotas) => {
   const [saldo, nivel] = calcularSaldoRanqueadas(parseInt(vitorias), parseInt(derrotas));

   console.log(`O Herói tem de saldo de **${saldo}** está no nível de **${nivel}**`);

   reader.close();
 });
});