// Carne - 500 gr por homem  300 por mulher e 200 por criança  + de 6 horas - 650 gr valor base
// Cerveja - 1200 ml por homem e 900mL por mulher + 6 horas - 2000 ml valor base
// Refrigerante/agua - 1000 ml por homem e 750ml por mulher e 500ml por criança + 6 horas 1500ml valor base



// Crianças valem por 0,5

let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

const img_meat = document.getElementById("meat");
const img_beer = document.getElementById("beer");
const img_soda = document.getElementById("soda");


var Active = [];
var img_Active;
img_meat.addEventListener("click", addStyle);
img_beer.addEventListener("click", addStyle);
img_soda.addEventListener("click", addStyle);

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * homens + (carnePP(duracao) * 0, 6 * mulheres) + (carnePP(duracao) * 0, 4 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * homens + (cervejaPP(duracao) * 0, 75 * mulheres);
    let qdtTotalBebidas = bebidasPP(duracao) * homens + ((cervejaPP(duracao) * 0, 75 * mulheres)) + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>Você irá precisar de:</p>`
    for (let i = 0; i < Active.length; i++) {
        if (Active[i] == "meat") {
        resultado.innerHTML += `<p>${Math.ceil(qdtTotalCarne / 1000)} Kg de Carne</p>`
    }
    else if (Active[i] == "beer"){
        resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    }
    else if (Active[i] == "soda") {
        resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Pets 2L de Bebidas</p>`
    };
    }
}


function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 500;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

function addStyle(e){
    e.target.style = `border-style: solid; border-width: 4px; border-color: rgb(127, 88, 30); background-color: rgba(154, 116, 79, 0.5)`;
    img_Active = e.target.id;

    Active.push(img_Active);

    e.target.removeEventListener(e.type, arguments.callee);
    e.target.addEventListener(e.type, removeStyle);
}

function removeStyle(e){
    e.target.style = "border:hover: 3px solid black";
    img_Active = undefined;

    Active.splice(e.target.id, 1);
    
    e.target.removeEventListener(e.type, arguments.callee);
    e.target.addEventListener(e.type, addStyle);
}

