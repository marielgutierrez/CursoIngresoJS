/*
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
Mariel Gutierrez
Guia Introduccion 'SWITCH' Ej 3
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	let febrero;
	let noFebrero;
	
	febrero = "Este mes no tiene más de 29 días."
	noFebrero = "Este mes tiene 30 o más días."

	//alert(mesDelAño);
	
	switch (mesDelAño)
	{
		case "Febrero":
			alert(febrero);
			break;

		default:
			alert(noFebrero);
	}


}//FIN DE LA FUNCIÓN