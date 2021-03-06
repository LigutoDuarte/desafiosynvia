// Buscando dados com requisição http
var myform = document.forms['formulario'];
var requestURL = 'https://raw.githubusercontent.com/zerovoros/estagio-synvia/master/user.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
// Assim que buscar os dados, transforme de objeto para string
request.onload = function() {
  var dados = request.response;
  var myJSON = dados;
var myString = JSON.stringify(myJSON);

// Passando os valores que estavam no arquivo para o lugar pedido
document.getElementById("nome").value = dados.nome;
document.getElementById("sobrenome").value = dados.sobrenome;
document.getElementById("profissao").value = dados.emprego;
document.getElementById("empresa").value = "Não fornecido no arquivo";
document.getElementById("nacionalidade").value = "Não fornecido no arquivo";
document.getElementById("telefone").value = dados.contato.telefone;
document.getElementById("email").value = dados.contato.email;
// Porém, encontrei que não havia 2 dados, sendo eles empresa e nacionalidade.
// Criação de elementos <p> para mostrar as médias dos meses
var mes1 = document.createElement("P");
var mes2 = document.createElement("P");
var mes3 = document.createElement("P");
var aux = 0;
var aux1 = 0;
var aux2 = 0;
// Começo de busca dos dados em matriz
//Laço para o primeiro mes [0][0], [0][1], [0][2]
for (var M=0;M<1;M++)
  {
    for (var N=0;N<dados.pontos.meses.length;N++)
    {
          aux = aux + dados.pontos.meses[M][N];
          console.log(dados.pontos.meses[M][N]);
    }
  
  }
  var mediaMes1 = aux/dados.pontos.meses.length;
//Laço para o segundo mes [1][0], [1][1], [1][2]
for (var M=1;M<2;M++)
  {
    for (var N=0;N<dados.pontos.meses.length;N++)
    {
          aux1 = aux1 + dados.pontos.meses[M][N];
          console.log(dados.pontos.meses[M][N]);
    }
  
  }
  var mediaMes2 = aux1/dados.pontos.meses.length;
//Laço para o terceiro mes [2][0], [2][1], [2][2]
for (var M=2;M<3;M++)
  {
    for (var N=0;N<dados.pontos.meses.length;N++)
    {
          aux2 = aux2 + dados.pontos.meses[M][N];
          console.log(dados.pontos.meses[M][N]);
    }
  
  }
var mediaMes3 = aux2/dados.pontos.meses.length;

// Colocar na tela as médias com 2 casas decimais
mes1.innerHTML = "Média do primeiro mês: " + mediaMes1.toFixed(2);
mes2.innerHTML = "Média do segundo mês: " + mediaMes2.toFixed(2);
mes3.innerHTML = "Média do terceiro mês: " + mediaMes3.toFixed(2);


// Deixando alinhado na página
document.getElementById("campos").appendChild(mes1);
document.getElementById("campos").appendChild(mes2);
document.getElementById("campos").appendChild(mes3);
}
//Verificar os dados do formulario para validação
function validarFormulario(){

// Tornando os Campos obrigatórios e completos
	var myform = document.forms['formulario'];
	if(myform.nome.value == ""){
		alert('Preencha o nome');
	}
	if(myform.sobrenome.value == ""){
		alert('Preencha o sobrenome');
	}
  	if(myform.profissao.value == ""){
		alert('Preencha a profissao');
	}
  	if(myform.empresa.value == ""){
		alert('Preencha a empresa');
	}
  	if(myform.nacionalidade.value == ""){
		alert('Preencha a nacionalidade');
	}
  	if(myform.telefone.value == ""){
		alert('Preencha o telefone');
	}

  	if(myform.email.value == ""){
		alert('Preencha o email');
	}

  return false;
}
