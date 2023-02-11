/*
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARACIÓN: tomamos a Julio y Agosto como los meses de Invierno.
Mariel Gutierrez
Guia Introduccion 'SWITCH' Ej 2
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let verano;
	let primavera;
	let otoño;
	let invierno;

	verano = "Ya pasamos el frio, ahora calor!!!.";
	primavera = "Ya pasamos el frio, ahora calor!!!.";
	otoño = "Falta para el invierno.";
	invierno = "Abrigate hace frio."

	//alert(mesDelAño);
	switch (mesDelAño)
	{
		case "Enero":
			//alert(verano);
			//break;

		case "Febrero":
			alert(verano);
			break;

		case "Marzo":
			//alert(otoño);
			//break;

		case "Abril":
			//alert(otoño);
			//break;

		case "Mayo":
			alert(otoño);
			break;

		case "Junio":
			//alert(invierno);
			//break;	

		case "Julio":
			//alert(invierno);
			//break;

		case "Agosto":
			alert(invierno);
			break;

		case "Septiembre":
			//alert(primavera);
			//break;

		case "Octubre":
			//alert (primavera);
			//break;
		case "Noviembre":
			alert(primavera);
			break;

		case "Diciembre":
			alert(verano);
			break;
		
		
	}




}//FIN DE LA FUNCIÓN