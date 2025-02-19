function divisao(a,b) {
    if(b == 0){
        throw new Error("Não pode fazer divisão por zero.")
    }
    return a/b;
}

function subtracao(a, b) {
    return a - b;
}

function subtracao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a * b;
}

function executar(valor1, valor2, operacao) {
    return operacao(valor1, valor2)
}

const showResult = document.querySelector('.result')

// Executando um cálculo e exibindo na tela
const resultado = executar(10, 5, subtracao);

if (showResult == '0') {
    showResult = 'teste';
} else {
    showResult.textContent = resultado;
}

// executar(10, 5, subtracao)

// cosole.log(executar(10, 0, divisao))