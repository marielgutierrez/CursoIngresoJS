/*Al ingresar una edad debemos informar si la persona es adolescente,
edad entre 13 y 17 años (inclusive) .
Mariel Gutierrez
Guia Introduccion 'IF' Ej 4
*/
function mostrar()
{
	let edad;
	//tomo la edad 
	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);
	
	if(edad >12 && edad <18)
	{
		alert("Sos adolescente");
	} 
	else {
		alert("No sos adolescente");
	}
	
}//FIN DE LA FUNCIÓN

	/*if (edad >=13 && edad <=17)
	{
		alert("ok");
	}
	
	OPERADORES LOGICOS
	A   B    && ||
	
	if (edad){

	}
	else{

	}
	*/

