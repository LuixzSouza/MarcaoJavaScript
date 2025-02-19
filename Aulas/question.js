/*
 * 
 * 1 - Criar um array de nomes e imprimir cada um usando forEach .
 *
 * 2 - Criar um array de idades e filtrar apenas as maiores de 18.
 *
 * 3 - Criar um array de preços e calcular o total usando reduce
 *
 * Calcular a média da turma tendo o sehguinte array de notas [5, 10, 8.5, 9, 4, 5.7]
 * 
 * Criar um array de notas aprovadas nota >= 7.0
 */

const arrayNomes = ["Nome1", "Nome2", "Nome3", "Nome4", "Nome5"];

const novoArray = arrayNomes.map( (nome) => {
    return nome.toLowerCase();
})

console.log(arrayNomes, novoArray);

const notaAlunos = [5, 10, 8.5, 9, 4, 5.7];

notaAlunos.forEach((nota) => {
    if (nota >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
})