/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	let notas;

	//Genero el número RANDOM entre 1 y 10
	notas = Math.floor(Math.random()*(10 - 1 + 1) + 1);
	notas = parseInt(notas);

	alert(notas);

	if (notas == 9 || notas == 10)
	{
		alert("EXCELENTE");
	}
	else
	{
		if (notas > 4)
		{
			alert("APROBÓ");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN