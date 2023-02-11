/*
una agencia de viajes nos piden informar si hacemos viajes a lugares
según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche

Mariel Gutierrez
Guia Introduccion 'SWITCH' Ej 10
*/
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let mensajeSi;
	let mensajeNo;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	mensajeSi = "Se viaja";
	mensajeNo = "No se viaja";

	switch(estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					alert(mensajeSi);
					break;
				default:
					alert(mensajeNo);
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					alert(mensajeSi);
					break;
				default:
					alert(mensajeNo);
					break;
			}
			break;
		case "Otoño":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					alert(mensajeSi);
					break;
			}
			break;
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert(mensajeNo);
					break;
				default:
					alert(mensajeSi);
					break;
			}
			break;

	}
	

}//FIN DE LA FUNCIÓN