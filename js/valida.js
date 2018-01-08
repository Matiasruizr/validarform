function validar(){
	var nombre = document.getElementById('nombre').value;
	var apellidos = document.getElementById('apellidos').value;
	var telefono = document.getElementById('telefono').value;
	var mail = document.getElementById('mail').value;

	var enviar = false;
	document.getElementById('errorform').innerHTML = "";
	document.getElementById('successform').innerHTML = "";

	if(nombre.length == 0){
		document.getElementById('errorform').innerHTML = "Debe ingresar un nombre";
	}else{
		if(apellidos.length == 0){
			document.getElementById('errorform').innerHTML = "Debe ingresar un apellido";
		}else{
			if(telefono.length != 9){
				document.getElementById('errorform').innerHTML = "El telefono debe ser de 9 digitos";
			}else{
				if (validarEmail(mail) == false) {
					document.getElementById('errorform').innerHTML = "El email ingresado es incorrecto";
				}else{
					document.getElementById('successform').innerHTML = "Gracias por ingresar sus datos";
					enviar = true;
				}
			}
		}
	}	
} // fin function

function validarEmail(email) {
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!expr.test(email)){
		return false;
	}
} // fin function