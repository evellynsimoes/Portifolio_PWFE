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
        imposto = (faixa - 2112) * 0.075 - 158.40;
    }else if(faixa <= 4456){
        imposto = (faixa - 3282) * 0.15 - 370.80 + 158.40;
    }else if(faixa <=5634){
        imposto = (faixa - 4456) * 0.225 - 602 + 370.80 + 158.40;
    }else{
        imposto = (faixa - 5634) * 0.275 - 826 + 602 + 370.80 + 158.40;
    }

    document.getElementById("resultado").innerText = `O imposto é ${imposto}`
}
    

