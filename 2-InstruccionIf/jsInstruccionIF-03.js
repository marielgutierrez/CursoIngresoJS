/*Al ingresar una edad debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad.
Mariel Gutierrez
Guia Introduccion 'IF' Ej 3
*/
function mostrar()
{
	let edad;
	//tomo la edad
	edad = document.getElementById("txtIdEdad").value;
	
	if (edad >= 18)
	{
		alert("Sos mayor de edad");
	} 
	else {
		alert("Sos menor de edad");
	}
	
}//FIN DE LA FUNCIÓN