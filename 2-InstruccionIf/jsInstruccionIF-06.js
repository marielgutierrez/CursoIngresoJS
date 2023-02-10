/*
Al ingresar una edad debemos informar si la persona 
es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) 
o niño (menor a 13 años).
Mariel Gutierrez
Guia Introduccion 'IF' Ej 6
*/
function mostrar()
{
	let edad;
	//tomo la edad 
	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if (edad >= 18)
	{
		alert("Sos mayor de edad");
	} 
	else
	{
	 	if (edad >= 13 && edad <= 17)
		{
			alert("Sos adolescente");
		}
		else
		{
			alert("Sos niño");
		}
	}

}//FIN DE LA FUNCIÓN