/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
Mariel Gutierrez
Guia Introduccion 'IF' Ej 8
*/
function mostrar()
{
	let edad;
	let estadoCivil;

	//tomo la edad
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	if (edad >= 18 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN