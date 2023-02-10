/* Al ingresar una edad solo debemos informar si la persona NO es adolescente.
Mariel Gutierrez
Guia Introduccion 'IF' Ej 5
*/

function mostrar()
{
	let edad;

	//tomo la edad
	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if(edad < 13 || edad >17)
	{
		alert("No sos adolescente");
	}
	
	

}//FIN DE LA FUNCIÓN

//! niega una expresion, le cambia el valor

/*

ado = edad > 12 && edad <17

if (!ado){

}
if (!(edad > 12 && edad < 17)){

}

*/