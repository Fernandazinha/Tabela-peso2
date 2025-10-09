//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Fernanda Nutrição";
subtitulo.textContent = "Meus Pacientes";

//acessar a tag tr - paciente Paulo
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    //seleciona o conteúdo peso da tag
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    // seleciona o conteúdo altura da tag
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //calcula o imc
    var imc = calcularIMC(peso, altura);
    
    //variáveis com valor true
    var pesoValido = true;
    var alturaValido = true; 

    if(pesoValido && alturaValido){
        // acessa e altera o imc
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = calcularIMC(peso, altura);
    }
    //define limites de peso e altura
    if(peso <= 0 || peso >= 1000){
        var pesoValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("campo-invalido");
        
    }
    if(altura <= 0 || altura >= 3.00){
        var alturaValido = false;
        tdImc.textContent = "Altura Inválido";
        paciente.classList.add("campo-invalido");

    }
}
//QUANDO CLICAR NO SUBTITULO, APAREÇA UMA MENGAGEM
subtitulo.addEventListener('click', mostraMensagem);

function mostraMensagem(){
    alert("Este elemento foi clicado");
}

function calcularIMC(peso, altura){
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}






