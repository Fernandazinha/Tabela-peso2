//Acessa o botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");

//Executa os código ao clicar no botão
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();

//acessa o formulário
var formulario = document.querySelector("#form-adiciona");
var paciente = buscaValoresFormulario(formulario);
var pacienteTr=criarTr(paciente);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);
});

function buscaValoresFormulario(formulario){
//Cria objeto paciente
var paciente = {
    nome: formulario.nome.value,
    peso: formulario.peso.value,
    altura: formulario.altura.value,
    gordura: formulario.gordura.value,
    imc: calcularIMC(formulario.peso.value, formulario.altura.value)
}

return paciente;

}

function criarTr(paciente){
//Cria a tag , <tr>
var pacienteTr = document.createElement("tr");

//Cria as tags no <td>
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

//adiciona os valores as tags criadas
nomeTd.textContent = paciente.nome;
pesoTd.textContent = paciente.peso;
alturaTd.textContent = paciente.altura;
gorduraTd.textContent = paciente.gordura;
imcTd.textContent = paciente.imc;

//Adiciona as tags na tela do usário
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

return pacienteTr;
}