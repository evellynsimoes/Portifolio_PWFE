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
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);
    const n3 = Number(document.getElementById("n3").value);

    let maior_numero, menor_numero, medio_numero;

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
        maior_numero = n3
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
    document.getElementById("resultado").innerText = `Essa hora são ${calculo} minutos.`
}

//exercicio7-aula3
const Notas = () =>{
    let valor = Number(document.getElementById("valor").value);
    
    const notas = [200, 100, 50, 20, 10, 5, 1];
    let resultado ='';

    for (let i =0; i< notas.length; i++){
        let cedula = notas [i];

        let quantidade = Math.floor(valor/cedula);
        
        if (quantidade > 0) {
            resultado += `${quantidade} cédulas de R$${cedula}<br>`;
        }
        
        valor %= cedula;
    }
    document.getElementById("resultado").innerHTML = resultado
}

//exercicio8-aula3
const Raiz = () =>{
    const numero = Number(document.getElementById("numero").value);
    const raiz = Math.sqrt(numero)
    document.getElementById("resultado").innerText = raiz
}

//exercicio9-aula3
const Forms = () =>{
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value;
    const telefone = document.getElementById("telefone").value;
    const celular = document.getElementById("celular").value;
    const email = document.getElementById("email").value;

    if (!nome || !endereco || !sexo || !telefone || !celular || !email){
        document.getElementById("resultado").innerText = "Preencha todos os campos";
        return;
    }

    document.getElementById("resultado").innerText = "Cadastrado com sucesso"
}

//exercicio10-aula3
const Imposto = () =>{
    let faixa= Number(document.getElementById("faixa").value);
    let imposto = 0;

    if (faixa <= 2112){
        imposto = 0;
    }else if(faixa <=3282){
        imposto = (faixa - 2112) * 0.075;
    }else if(faixa <= 4456){
        imposto = (faixa - 3282) * 0.15 - (3282 - 2112) * 0.075;
    }else if(faixa <=5634){
        imposto = (faixa - 4456) * 0.225 (4456 - 3282) * 0.15 + (3282 - 2112) * 0.075;
    }else{
        imposto = (faixa - 5634) * 0.275 + (5634 - 4456) * 0.225 + (4456 - 3282) * 0.15 + (3282 - 2112) * 0.075;
    }

    document.getElementById("resultado").innerText = `O imposto é ${imposto}`
}

//execicio11-aula3
const INSS = () =>{
    const salario = document.getElementById("salario").value;
    restante = 0;

    if (salario <= 1302 ){
        restante = salario * 0.075;
        document.getElementById("resultado").innerText = `O valor do INSS é ${restante}`
    }else if (salario > 1302 && salario < 2571.29){
        conta = (salario - 1302) * 0.09;
        restante = 97.65 + conta;
        document.getElementById("resultado").innerText = `O valor do INSS é ${restante}`
    }else if(salario > 2571.29 && salario < 3856.94){
        conta = (salario - 2571.29) * 0.12
        restante = 97.65 + 114.24 + conta
        document.getElementById("resultado").innerText = `O valor do INSS é ${restante}`
    }else if(salario > 3856.94 && salario < 7507.49){
        conta = (salario - 3856.94) * 0.14
        restante = 97.65 + 114.24 + 154.28 + conta
        document.getElementById("resultado").innerText = `O valor do INSS é ${restante}`
    }else{
        conta = (salario - 7507.49) * 0.14
        restante = 97.65 + 114.24 + 154.28 + 511.07 + conta
        document.getElementById("resultado").innerText = `O valor do INSS é ${restante}`
    }
}

//exercicio12-aula3
const Juros = () =>{
    let capital = parseFloat(document.getElementById("capital").value);
    let taxa = parseFloat(document.getElementById("taxa").value) / 100;
    let tempo = parseFloat(document.getElementById("tempo").value);

    let montante = capital * Math.pow((1 + taxa), tempo);
    let juros = montante - capital;

    document.getElementById("resultado").innerText = `Juros de ${juros.toFixed(2)}`
}
    
//exercicio13-aula3
const Financiamento = () =>{
    let financiamento = parseFloat(document.getElementById("financiamento").value);
    let taxa = parseFloat(document.getElementById("taxa").value) / 100;
    let numParcelas = parseFloat(document.getElementById("numParcelas").value)

    let conta1 = (financiamento * taxa);
    let conta2 = (1 - Math.pow(1 + taxa, -numParcelas));
    let div = conta1 / conta2

    console.log(conta1, conta2);
    console.log(div);
    


    document.getElementById("resultado").innerText = `O valor da parcela é ${div.toFixed(2)}`;
}
