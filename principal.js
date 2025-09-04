//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector("subtitulo")
var titulo = document.querySelector("titulo");
titulo.textContent = "Fernanda nutrição";
subtitulo.textContent = "Fernanda Nutrição";

//acessar a tag tr - paciente Paulo
var paciente = document.querySelector(".paciente");

for(var i =0; i < paciente.length; i++){
//seleciona o conteúdo da tag
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//seleciona o conteúdo altuta tag
var tdAltura = paciente.querySelector(".info-altura") 
var altura = tdAltura.textContent;
 
//calcula imc
var imc = peso / (altura * altura);

//vriáveis com o valor true
var pesoValido = true;
var alturaValida = true; 

if(pesoValido && alturaValida){
    //acessa e altura po imc
    var tdImc = paciente.querySelector("info-imc");
    tdImc.textContent = imc;
}

//define limites e peso e altura
if(peso <= 0 || peso >= 1000){
    alert("Peso inválido");
    var pesoValido = false;
    tdImc.textContent = "Peso inválida"
}
if(altura <= 0 || altura >= 3.00){
    console.log("Altura invália");
    alert("Altura inválido");
    var alturaValida = false;
    tdImc.textContent = "Altura Inválida";
}

}

