/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años"
function mostrar()
{	
	//declare variables
	let nombre;
	let edad;
	let resultado;
	//tomar los datos
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	// "Usted se llama José y tiene 66 años"
	resultado = "Usted se llama " + nombre + " y tiene " + edad + " años";
	alert(resultado);
}
*/
/* Se debe ingresar por prompt: razón social de la empresa y nombre del titular.
El dni del titular y la fecha de inicio de actividades se ingresarán por id. 
Mostrar por alert todos los datos ingresados y el cuit de la empresa, 
sabiendo que el mismo está conformado por un código numérico según el tipo de persona (30 en el caso de empresas), 
un guión, el dni del titular, otro guión y un dígito verificador (será un número aleatorio entre 0 y 9).
Por ejemplo: 30-22666548-7

parcial y recuperatorio 2018 1,2,3 ejercicios
*/
function mostrar()
{
	let dniTitular;
	let fechaInicio;
	let razonSocialEmpresa;
	let nombreTitular;
	let mensaje;
	let cuitEmpresa;

	dniTitular = document.getElementById("txtIdNombre").value;
	fechaInicio = document.getElementById("txtIdEdad").value;

	razonSocialEmpresa = prompt("Ingresar razón social de la empresa");
	nombreTitular = prompt("Ingresar nombre del titular");

	cuitEmpresa = "30-" + dniTitular + "-7";

	mensaje =  "La razon social de la empresa es: " + razonSocialEmpresa + " El cuit de la empresa es: " + cuitEmpresa + " El nombre titular es: " + nombreTitular + " El dni del titular es: " + dniTitular + " La fecha de inicio de actividades es: " + fechaInicio;
	
	alert(mensaje);
	//cambiar el orden, alert todo junto
}

//txtIdEdad