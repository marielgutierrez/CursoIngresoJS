/*Al ingresar una edad debemos informar solo si la persona es mayor de 
Mariel Gutierrez
Guia Introduccion 'IF' Ej 2
*/

function mostrar()
{
	let edad;
	
	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if(edad >=18)
	{
		alert("Sos mayor de edad");
	}

}//FIN DE LA FUNCIÓN

/*
operador de comparacion

== es igual a
> mayor a
>= mayor o igual a 
< >
*/