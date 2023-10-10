function atividade1() {
    const idade = prompt("Digite sua idade:");
    if (idade >= 18) {
        alert("Você pode entrar na festa.");
    } else {
        alert("Desculpe, você não pode entrar na festa.");
    }
}

function atividade2() {
    const peso = parseFloat(prompt("Digite seu peso em kg:"));
    const altura = parseFloat(prompt("Digite sua altura em metros:"));
    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        alert("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        alert("Peso normal");
    } else {
        alert("Acima do peso");
    }
}

function atividade3() {
    const taxaDeCambio = 5.5; // Taxa de câmbio fixa
    const valorEmReais = parseFloat(prompt("Digite o valor em reais:"));
    const valorEmDolares = valorEmReais / taxaDeCambio;
    alert(`O valor em dólares é: $${valorEmDolares.toFixed(2)}`);
}

function atividade4() {
    const estoque = 10; // Quantidade em estoque
    const quantidadeDesejada = parseInt(prompt("Digite a quantidade desejada:"));

    if (quantidadeDesejada <= estoque) {
        alert("Produto disponível.");
    } else {
        alert("Produto indisponível.");
    }
}

function atividade5() {
    const nota1 = parseFloat(prompt("Digite a primeira nota:"));
    const peso1 = parseFloat(prompt("Digite o peso da primeira nota:"));
    const nota2 = parseFloat(prompt("Digite a segunda nota:"));
    const peso2 = parseFloat(prompt("Digite o peso da segunda nota:"));
    const nota3 = parseFloat(prompt("Digite a terceira nota:"));
    const peso3 = parseFloat(prompt("Digite o peso da terceira nota:"));

    const mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);
    alert(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);
}

function atividade6() {
    const listaDeCompras = prompt("Digite a lista de compras (separe os itens por vírgula):");
    const itens = listaDeCompras.split(",");
    let lista = "Lista de compras:\n";
    for (const item of itens) {
        lista += item.trim() + "\n";
    }
    alert(lista);
}

function atividade7() {
    const loginCorreto = "usuario";
    const senhaCorreta = "senha123";
    const login = prompt("Digite seu login:");
    const senha = prompt("Digite sua senha:");

    if (login === loginCorreto && senha === senhaCorreta) {
        alert("Login bem-sucedido.");
    } else {
        alert("Login falhou. Verifique seu login e senha.");
    }
}

function atividade8() {
    const valorDoProduto = parseFloat(prompt("Digite o valor do produto:"));
    const percentualDeDesconto = parseFloat(prompt("Digite o percentual de desconto:"));

    const valorDoDesconto = (percentualDeDesconto / 100) * valorDoProduto;
    const valorFinal = valorDoProduto - valorDoDesconto;
    alert(`O valor com desconto é: R$${valorFinal.toFixed(2)}`);
}

// Escolha a atividade desejada
atividade1();
atividade2();
atividade3();
atividade4();
atividade5();
atividade6();
atividade7();
atividade8();
