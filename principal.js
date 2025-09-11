//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo")
var titulo = document.querySelector(".titulo");
titulo.textContent = "Fernanda nutrição";
subtitulo.textContent = "Meus clientes";

//acessar a tag tr - paciente Paulo
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

//seleciona o conteúdo da tag
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//seleciona o conteúdo altuta tag
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
 
//calcula imc
var imc = peso / (altura * altura);

//vriáveis com o valor true
var pesoValido = true;
var alturaValida = true; 

if(pesoValido && alturaValida){
    //acessa e altura o imc
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc;
}

//define limites de peso e altura
if(peso <= 0 || peso >= 1000){
    alert("Peso inválido");
    var pesoValido = false;
    tdImc.textContent = "Peso inválido!"
}
if(altura <= 0 || altura >= 3.00){
    alert("Altura inválida");
    var alturaValida = false;
    tdImc.textContent = "Altura Inválida";
}

}

