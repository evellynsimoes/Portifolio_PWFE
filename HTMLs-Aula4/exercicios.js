//exercicio1-aula4
function Vetores_Dobro(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n4").value);
    let n4 = Number(document.getElementById("n5").value);
    let n5 = Number(document.getElementById("n6").value);

    let lista = [n1, n2, n3, n4, n5]
    let resultado = "";
    for (let i = 0; i < lista.length; i ++){
        let dobro = lista[i]* 2
        resultado += `${dobro}\n`
       
    document.getElementById("resultado"). innerText =resultado; 
    }
}

//exercicio2-aula4
function Vetores_Media(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let n4 = Number(document.getElementById("n4").value);
    let n5 = Number(document.getElementById("n5").value);
    let n6 = Number(document.getElementById("n6").value);
    let n7 = Number(document.getElementById("n7").value);
    let n8 = Number(document.getElementById("n8").value);

    let soma = 0;
    let lista = [n1, n2, n3, n4, n5, n6, n7, n8]
    for(let i = 0; i < lista.length; i++){
        soma += lista[i];
        let div = soma / lista.length

        document.getElementById("resultado").innerText = `A média é ${div}`
    }
}

//exercicio3-aula4
let idades = [];  
let contador = 0; 

function Idades() {
    let idade = Number(document.getElementById("idade").value);

    if (idade >= 0) {
        
        idades.push(idade);

        document.getElementById("idade").value = "";

        contador++;

        document.getElementById("contador").innerText = `Idade ${contador + 1} de 20`;
        if (contador === 19) {
            calcularMedia(); 
        }
    }
}

function calcularMedia() {

    let soma = idades.reduce((acc, idade) => acc + idade, 0);
    

    let media = soma / idades.length;


    let acimaDaMedia = idades.filter(idade => idade > media);


    document.getElementById("resultado").innerHTML = `
        <p><strong>A média das idades é:</strong> ${media.toFixed(2)}</p>
        <p><strong>Idades acima da média:</strong> ${acimaDaMedia.join(", ")}</p>
    `;
}

//exercicio4-aula4
function numerosPares(){
    let numeros = document.getElementById("numeros").value;

    let lista = numeros.split(",").map(Number);
    if (lista.length !== 10 || lista.some(isNaN)){
        alert("Insira 10 numeros validos")
        return;
    }

    let pares = [];
    let impares = [];

    lista.forEach(numero => {
        if (numero % 2 ===0){
            pares.push(numero)
        }else{
            impares.push(numero)
        }
    });
    document.getElementById("pares").innerText = "Pares: " + pares.join(", ");
    document.getElementById("impares").innerText = "Impares: " + impares.join(", ");
}

//exercicio5-aula4
function Intervalo(){
    let validos = [];
    let invalido = false;

    for(let i = 1; i <= 8; i++){
        let numero = Number(document.getElementById("n" + i).value);

        if (numero < 100 || numero > 200){
            invalido = true;
            break;
        }else{
            validos.push(numero);
        }
        if (invalido) {
            document.getElementById("resultado").innerHTML = "Valor inválido! Todos os números devem estar entre 100 e 200.";
        } else {
            document.getElementById("resultado").innerHTML = "Números válidos: " + validos.join(", ");
        }
    }
}

//exercicio6-aula4
function Nomes() {
    const nomes = ["Maria", "Carlos", "Evellyn", "Lívia", "João", "Fernanda", "Yngrid", "Nicolas", "Ricardo", "Danielle"];
    
    let nomeBuscado = document.getElementById("nome").value;

    let indice = nomes.indexOf(nomeBuscado);
    
    if (indice !== -1) {
        document.getElementById("resultado").innerHTML = "Nome encontrado na posição: " + indice;
    } else {
        document.getElementById("resultado").innerHTML = "Nome não encontrado.";
    }
}

//exercicio7-aula4
let tentativas = 0; 
function Nomes() {
    const nomes = ["Maria", "Carlos", "Evellyn", "Lívia", "João", "Fernanda", "Yngrid", "Nicolas", "Ricardo", "Danielle"];
    
    let nomeBuscado = document.getElementById("nome").value;  
    
    if (tentativas < 5) { 
        tentativas++; 
        
        let indice = nomes.indexOf(nomeBuscado); 
        
        if (indice !== -1) {
            document.getElementById("resultado").innerHTML = `Nome na posição: ${indice} na tentativa ${tentativas}.`;
        } else {
            document.getElementById("resultado").innerHTML = `Não encontrado. Tentativa ${tentativas}:  Você tem mais ${5 - tentativas} tentativas.`;
        }
    } else {
        document.getElementById("resultado").innerHTML = "Acabou";
    }
}

//exercicio8-aula4
function Processar() {
    let A = [
        Number(document.getElementById("n1").value),
        Number(document.getElementById("n2").value),
        Number(document.getElementById("n3").value),
        Number(document.getElementById("n4").value),
        Number(document.getElementById("n5").value),
        Number(document.getElementById("n6").value)
    ];

    let B = A.map(numero => numero / 2);

    let resultado = `
        Vetor A: ${A.join(", ")}<br>
        Vetor B (metade dos valores de A): ${B.join(", ")}
    `;
    
    document.getElementById("resultado").innerHTML = resultado;
}

//exercicio9-aula4
function Alternacao() {
    let A = [
        Number(document.getElementById("n1").value),
        Number(document.getElementById("n2").value),
        Number(document.getElementById("n3").value),
        Number(document.getElementById("n4").value),
        Number(document.getElementById("n5").value)
    ];

    let B = [
        Number(document.getElementById("n6").value),
        Number(document.getElementById("n7").value),
        Number(document.getElementById("n8").value),
        Number(document.getElementById("n9").value),
        Number(document.getElementById("n10").value)
    ];

    let C = [];

    for (let i = 0; i < 5; i++) {
        C.push(A[i], B[i]);
    }

    let resultado = `
        Vetor A: ${A.join(", ")}<br>
        Vetor B: ${B.join(", ")}<br>
        Vetor C (valores alternados de A e B): ${C.join(", ")}
    `;
    
    document.getElementById("resultado").innerHTML = resultado;
}