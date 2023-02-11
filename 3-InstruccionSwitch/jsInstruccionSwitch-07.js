/*
Al selecionar un destino,
indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste.
Mariel Gutierrez
Guia Introduccion 'SWITCH' Ej 7
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	let puntoCardinal;
	let mensaje;
	//alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Cataratas":
			puntoCardinal = "Norte";
			break;
		case "Ushuaia":
			puntoCardinal = "Sur";
			break;
		case "Bariloche":
			puntoCardinal = "Oeste";
			break;
		case "Mar del plata":
			puntoCardinal = "Este";
			break;
	}

	mensaje = destinoIngresado + " se encuentra en el " + puntoCardinal + ".";
	alert(mensaje);

}//FIN DE LA FUNCIÓN