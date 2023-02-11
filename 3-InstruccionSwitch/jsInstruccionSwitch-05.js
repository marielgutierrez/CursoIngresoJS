/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
Mariel Gutierrez
Guia Introduccion 'SWITCH' Ej 5
*/
function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	let mensajeUno;
	let mensajeDos;
	
	mensajeUno = "Es de mañana.";
	mensajeDos = "Es otra parte del dia";
	//alert(horaDelDia);
	
	switch (horaDelDia)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
		alert(mensajeUno);
		break;

		default:
		alert(mensajeDos);

	}
	

}//FIN DE LA FUNCIÓN