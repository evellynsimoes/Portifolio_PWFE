//exercicio1-aula3
const calculadora = () => {

    const escolha = Number(document.getElementById("escolha").value);
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);

    let resultado;

    switch (escolha){
        case 1:
            resultado =`O resultado da soma é: ${a + b}`;
            break;
        case 2:
            resultado =`O resultado da subtração é: ${a - b}`;
            break;
        case 3:
            resultado =`O resultado da multiplicação é: ${a * b}`;
            break;
        case 4:
            resultado =`O resultado da divisão é: ${a / b}`;
            break;
        default:
            resultado = `Opção inválida!`
    }
    document.getElementById("resultado").innerText = resultado;
}

//exercicio2-aula3
const inverteString = () =>{
    const str = document.getElementById("str").value;
    const resultado = str.split('').reverse().join('');
    document.getElementById("resultado").innerText = resultado;
}

//exercicio3-aula3
const letraSeparadas = () =>{
    const str = document.getElementById("str").value; 
    const separacao = (str.split('').join(' '));
    document.getElementById("resultado").innerText = separacao;
}

//exercicio4-aula3
const VerificacaoCNH = () => {
    const idade = document.getElementById("idade").value;
    (idade >= 18) ? document.getElementById("resultado").innerText = "Você pode tirar sua CNH" : document.getElementById("resultado").innerText = "Você não pode tirar sua CNH";
};

//exercicio5-aula3
const OrdemCrescente = () =>{
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    const n3 = document.getElementById("n3").value;

    const maior_numero = 0;
    const medio_numero = 0;
    const menor_numero = 0;

    if (n1 > n2 && n1 > n3){
        maior_numero = n1
        if (n2 > n3){
            medio_numero = n2
            menor_numero = n3
        } else{
            menor_numero = n2
            medio_numero = n3
        }
    }else if(n2 > n1 && n2 > n3){
        maior_numero = n2
        if (n1 > n3){
            medio_numero = n1
            menor_numero = n3
        }else{
            menor_numero = n1
            medio_numero = n3
        }
    }else{
        menor_numero = n3
        if(n1> n2){
            medio_numero = n1
            menor_numero = n2
        }else{
            menor_numero = n1
            medio_numero = n2
        }
    }

    document.getElementById("resultado").innerText = `${maior_numero} > ${medio_numero} > ${menor_numero}`
}

//exercicio6-aula3
const ConversaoH_Min = () =>{
    const hora = Number(document.getElementById("hora").value);
    const calculo = hora * 60
    document.getElementById("resultado").innerText = calculo
}

//exercicio7-aula3

//exercicio8-aula3
const Raiz = () =>{
    const numero = Number(document.getElementById("numero").value);
    const raiz = Math.sqrt(numero)
    document.getElementById("resultado").innerText = raiz
}