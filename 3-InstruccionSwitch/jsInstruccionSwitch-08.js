/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino.
Mariel Gutierrez
Guia Introduccion 'SWITCH' Ej 8
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	let mensaje;
	let clima;

	//alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Cataratas":
		case "Mar del plata":
			clima = "CALOR";
			break;

		case "Bariloche":
		case "Ushuaia":
			clima = "FRIO";
			break;
	}

	mensaje = "En " + destinoIngresado + " hace " + clima + ".";
	alert(mensaje);

}//FIN DE LA FUNCIÓN