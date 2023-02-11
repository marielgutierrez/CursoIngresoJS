/*
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
Mariel Gutierrez
Guia Introduccion 'SWITCH' Ej 1
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);

	switch (mesDelAño)
	{
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;

		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;

		case "Diciembre":
			alert("Felices fiestas!!!.")
			break;

		default:
			alert("Es otro mes");
	}

}//FIN DE LA FUNCIÓN