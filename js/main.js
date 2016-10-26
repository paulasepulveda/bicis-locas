function validateForm(){
		var nombre = document.getElementById("name").value;
if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
	alert ("Debe ingresar su nombre");
  return false;
}
validarLetras (nombre);
validarMayus (nombre);
//valida las letras
function validarLetras (name){
	var filtro=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
	if (filtro.test(name)){
		return true;
	}else{
		alert("Ingresar solo letras");
	}
}
function validarMayus (name){
	if(name.substring(0,1)==name.substring(0,1).toUpperCase()){
		return true;
	}else{
		alert("Ingresar con primera letra maýúscula");
		return false;
	}
}
	var apellido = document.getElementById("lastname").value;
if (apellido ==null || apellido.length == 0 || /^\s+$/.test(apellido)){
	alert ("debe ingresar Apellido");
	return false;
}
}
