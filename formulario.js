function limpar() {
	document.getElementById("nome").value = "";
	document.getElementById("cidade").value = "";
	document.getElementById("cpf").value = "";
	document.getElementById("ativo").checked = false;
	document.getElementById("descricao").value = "";
	document.getElementById("arquivo").value = "";
	document.getElementById("gravidez").style.display = "none";
	document.getElementById("mensagem").innerHTML = "";

	var sexos = document.getElementsByName("sexo");
	for (var i = 0; i < sexos.length; i++) {
		sexos[i].checked = false;
	}

	//document.getElementById("mensagem").innerHTML = "<h2>innerHTML</h2>";
}

function validar(){
	var nome = document.getElementById("nome").value.trim();
	if (nome == "") {
		exibirMensagemErro("Informe o nome");
		return false;
	}

	if (nome.length <= 10) {
		exibirMensagemErro("Informe o nome com mais de 10 caracteres");
		return false;
	}

	var cpf = document.getElementById("cpf").value.trim();
	if (cpf == "") {
		exibirMensagemErro("Informe o CPF");
		return false;
	}

	if (cpf.length != 11) {
		exibirMensagemErro("Informe o CPF com 11 numeros");
		return false;
	}

	var sexos = document.getElementsByName("sexo");
	var marcados = false;
	for (var i = 0; i < sexos.length; i++) {
		if (sexos[i].checked) {
			marcados = true;
			break;
		}
	}

	if (!marcados) {
		exibirMensagemErro("Informe o sexo");
		return false;
	}


	exibirMensagemOk("Sucesso!");
	//document.forms[0].submit();
	//return true;
}	

function exibirQuadroGravidez(){
	var sexos = document.getElementsByName("sexo");
	document.getElementById("gravidez").style.display = "none";
	for (var i = 0; i < sexos.length; i++) {
		if (sexos[i].checked && sexos[i].value == "F") {
			document.getElementById("gravidez").style.display = "block";
			break;
		}
	}
}

function exibirMensagemErro(mensagem){
	document.getElementById("mensagem").style.color = "red";
	document.getElementById("mensagem").innerHTML = "<h4>" + mensagem + "</h4>";
}	

function  exibirMensagemOk(mensagem){
	document.getElementById("mensagem").style.color = "green";
	document.getElementById("mensagem").innerHTML = "<h4>" + mensagem + "</h4>";
}