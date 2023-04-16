function exercicio1(){
/*Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa vai parar quando for digitada a idade 999. No final, mostre quantos alunos existem na turma e qual é a média de idade do grupo.*/

    let indice = 0;
    let idades = [indice];
    let alunos = 0;
    let somaIdades = 0;
    let media = 0;

    while(idades[indice]!==999){
        idades[indice] = Number.parseFloat(prompt("Digite a idade de um aluno para continuar cadastrando, digite o número 999 para parar de cadastrar: "));
        somaIdades+=idades[indice];
        alunos++;
    }

    media = (somaIdades-999)/(alunos-1);

    alert(`Existem ${alunos-1} alunos na turma.`);
    alert(`A média de idades da turma é ${media}.`);

}

function exercicio2(){
/*Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salários pagos aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.*/

    let salario = 0;
    let somaSalarios1 = 0;
    let somaSalarios2 = 0;
    let sexo = 0;
    let continuar = true;


    do{
        sexo = Number.parseInt(prompt('Digite "1" para cadastrar o salário de alguém do sexo masculino, "2" para cadastrar o salário de alguém do sexo feminino.'));

        if(sexo===1){
            salario = Number.parseFloat(prompt("Digite o valor do salário:"));
            somaSalarios1+=salario;
        }else if(sexo===2){
            salario = Number.parseFloat(prompt("Digite o valor do salário:"));
            somaSalarios2+=salario;
        }

        continuar = confirm('Deseja cadastrar um salário? Clique "ok" para continuar e "cancelar" para parar de cadastrar.');

    }while(continuar);
      
    alert(`O total de salários pagos aos homens é de R$${somaSalarios1.toFixed(2)}.`);
    alert(`O total de salários pagos às mulheres é de R$${somaSalarios2.toFixed(2)}.`); 
}

function exercicio3(){
/*Crie um algoritmo que leia o valor inicial da contagem, o valor final e
o incremento, mostrando em seguida todos os valores no intervalo:
Ex:
Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2*/

    let valores = [];
    let contador_0 = Number.parseInt(prompt('Digite o valor inicial do contador: '));
    let contador_fim = Number.parseInt(prompt('Digite o valor final do contador: '));
    let incremento = Number.parseInt(prompt('Digite o valor a ser incrementado a cada repetição.'));

    for (let i=contador_0; i<=contador_fim;i+=incremento){
        valores[i] = Number.parseInt(prompt(`Digite o ${i}º valor: `));
        document.write(`O ${i}º valor é: ${valores[i]}.</br></br>`);
    }
    document.write(`O último valor é ${valores[contador_fim]}.`);
}

function exercicio4(){
/*Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
descontos para todos, mas especialmente para mulheres. Faça um
programa que leia nome, sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
a. Homens ganham 5% de desconto

b. Mulheres ganham 13% de desconto*/

    let nome = prompt('Digite o nome do cliente: ');
    let sexo = Number.parseInt(prompt('Digite 1 para sexo masculino e 2 para sexo feminino: '));
    let valorCompra = Number.parseFloat(prompt('Digite o valor da compra: '));
    let valorComDesconto = 0;

    if(sexo===1){
        valorComDesconto = valorCompra-(0.05*valorCompra);
    }else if(sexo===2){
        valorComDesconto = valorCompra-(0.13*valorCompra);
    }

    alert(`O valor da compra de ${nome}, com desconto, é R$${valorComDesconto.toFixed(2)}.`);
}

function exercicio5(){
/*Faça um algoritmo que pergunte a distância que um passageiro
deseja percorrer em Km. Calcule o preço da passagem, cobrando
R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
longas.*/

    let distancia = Number.parseFloat(prompt('Digite a distância, em quilômetros, que deseja percorrer: '));
    let passagem = 0;

    if(distancia<=200){
        passagem = distancia*0.5;
    }else if(distancia>200){
        passagem = distancia*0.45;
    }

    alert(`O preço da passagem para distância digitada é de R$${passagem.toFixed(2)}.`);

}

function exercicio6(){
/*Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m2. O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m2 = TERRENO POPULAR
Entre 100m2 e 500m2 = TERRENO MASTER
Acima de 500m2 = TERRENO VIP*/

    let largura = Number.parseFloat(prompt('Digite a largura do terreno, em metros: '));
    let comprimento = Number.parseFloat(prompt('Digite o comprimento do terreno, em metros: '));
    let area = largura*comprimento;

    if(area<100&&area>0){
        alert(`A área do terreno é ${area} m². Esse é um TERRENO POPULAR.`);
    }else if(area>=100&&area<=500){
        alert(`A área do terreno é ${area} m². Esse é um TERRENO MASTER.`);
    }else if(area>500){
        alert(`A área do terreno é ${area}. Esse é um TERRENO VIP.`);
    }else{
        alert('Opção inválida. Digite um número positivo.');
    }
}

       

