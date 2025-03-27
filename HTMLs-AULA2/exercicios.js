//exercicio1-aula2
function Subtracao() {
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    let subtracao = n1 - n2
    document.getElementById("resultado").innerText = `A diferença desses dois números é: ${subtracao}`;
}

//exercicio2-aula2
function verificarParImpar(){
    let n1 = Number(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");
    if (n1 % 2 == 0){
        resultado.innerText = `O número ${n1} é par`;
    }
    else{
        resultado.innerText= `O número ${n1} é ímpar`;
    }
}

//exercicio3-aula2
function Multiplos(){
    let nota1= Number(document.getElementById("nota1").value);
    let nota2= Number(document.getElementById("nota2").value);

    if(nota1 % nota2 == 0 ){
        document.getElementById("resultado").innerText=`O número ${nota1} é múltiplo do número ${nota2}`;
    }
    else{
        document.getElementById("resultado").innerText=`O número ${nota1} não é múltiplo do número ${nota2}`;
}
}

//exercicio4-aula2
function ConversaoF(){
    let numF= Number(document.getElementById("numF").value);
        
    let conta= (numF * 9/5) + 32;
    document.getElementById("resultado").innerText=`O resultado da conversão é: ${conta}`;
}

//exercicio5-aula2
function BaseAltura(){
    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    let conta = base * altura
    document.getElementById("resultado").innerText=`O valor da area é: ${conta}`;
}

//exercicio6-aula2
function Media(){
    let nota1= Number(document.getElementById("nota1").value);
    let nota2= Number(document.getElementById("nota2").value);

    let conta= (nota1 + nota2) /2

    if(conta >= 6){
        if(conta % 2 == 0){
            document.getElementById("resultado").innerText=`Você está acima da média! E ${conta} é par.`;
        }
        else{
            document.getElementById("resultado").innerText=`Você está acima da média! E ${conta} é ímpar.`;
        }
    }
    else{
        document.getElementById("resultado").innerText=`Você não está acima da média, sua média é: ${conta}`;
}
}

//exercicio7-aula2
function PesoAltura(){
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let imc = peso / altura **2
    document.getElementById("resultado").innerText=`O valor do imc é: ${imc}`;
}

//exercicio8-aula2
function AnoBissexto(){
    let ano= Number(document.getElementById("ano").value);

    if(ano % 4 == 0){
        document.getElementById("resultado").innerText=`O ano de ${ano} é bissexto!`;
    }

    else{
        document.getElementById("resultado").innerText=`O ano de ${ano} não é bissexto!`;
    }
}

//exercicio9-aula2
function TaxaCambio(){
    let taxa = Number(document.getElementById("taxa").value);
    let valor = Number(document.getElementById("valor").value);

    let conta = valor * taxa
    document.getElementById("resultado").innerText=`O valor convertido agora é ${conta}`;
}

//exercicio10-aula2
function Tabuada(){
    let tabuada= Number(document.getElementById("tabuada").value);
    let resultado = " ";

    for(i = 1; i <=10; i++ ){
        let mult= tabuada * i
        resultado += `${tabuada} x ${i} = ${mult} <br>`;
    }
    document.getElementById("resultado").innerHTML=resultado;
}

//exercicio11-aula2
function Jogo(){
    let resposta = Number(document.getElementById("jogo").value);

    const lista = [1, 2, 3];
    const escolha = lista[Math.floor(Math.random() * 3)];

    const opcoes = {
        1: "Pedra",
        2: "Papel",
        3: "Tesoura"
    };

    let resultadoMensagem = "O computador escolheu: " + opcoes[escolha] + "<br>";

    if (resposta === escolha){
        resultadoMensagem += "Empate!";
    } else if(resposta == 1 && escolha == 2){
        resultadoMensagem += "Você perdeu! Papel embrulha pedra!";
    } else if(resposta == 1 && escolha == 3){
        resultadoMensagem += "Você ganhou! Pedra quebra tesoura!";
    } else if(resposta == 2 && escolha == 1){
        resultadoMensagem += "Você ganhou! Papel embrulha pedra!";
    } else if(resposta == 2 && escolha == 3){
        resultadoMensagem += "Você perdeu! Tesoura corta papel!";
    } else if(resposta == 3 && escolha == 1){
        resultadoMensagem += "Você perdeu! Pedra quebra tesoura!";
    } else if(resposta == 3 && escolha == 2){
        resultadoMensagem += "Você venceu! Tesoura corta papel!";
    } else {
        resultadoMensagem += "Escolha inválida!";
    }

    document.getElementById("resultado").innerHTML = resultadoMensagem;
}

//exercicio12-aula2
function Fatorial(){
    let fatorial = Number(document.getElementById("fatorial").value);
    let expressao = "";
    let calculo = 1; 

    for (let i = fatorial; i > 0; i --){
        calculo *= i;

        expressao += (i > 1) ? `${i} × ` : `${i} = `;
    }
    document.getElementById("resultado").innerText=`O fatorial de ${fatorial} é : ${expressao}${calculo}`;
}