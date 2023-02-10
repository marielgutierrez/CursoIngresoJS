/*Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
Mariel Gutierrez
Guia Introduccion 'IF' Ej 1
*/
function mostrar()
{
	let edad;
	//pregunta la edad
	edad = document.getElementById("txtIdEdad").value;

	//en if no ponemos ; en la primera linea
	if (edad == 15) 
	{
		alert("niña bonita");
	}
}