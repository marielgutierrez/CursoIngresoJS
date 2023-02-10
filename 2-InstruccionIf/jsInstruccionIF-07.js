/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
Mariel Gutierrez
Guia Introduccion 'IF' Ej 7
*/
function mostrar()
{
	let edad;
	let estadoCivil;

	//tomo la edad
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	if (edad < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN

//Soltero es distinto a soltero