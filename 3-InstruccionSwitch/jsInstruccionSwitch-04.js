/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
Mariel Gutierrez
Guia Introduccion 'SWITCH' Ej 4
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let numero;
	let mensaje;
	//alert(mesDelAño);
	
	switch(mesDelAño)
	{
		case "Febrero":
			numero = 28;
			break;

		case "Enero":
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			numero = 30;
			break;

		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			numero = 31;
			break;
	}
	
	mensaje = mesDelAño + " tiene " + numero + " días.";
	alert(mensaje);


}//FIN DE LA FUNCIÓN