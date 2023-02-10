/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//declaro las variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//tomo los numeros por ID
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	
	//los transformo en enteros y realizo la operacion correcta
	resultado = parseInt (numeroUno) + parseInt (numeroDos)
	
	//mostrar el resultado
	alert("La Suma es " + resultado);	
}

function restar()
{
	//declaro las variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//tomo los numeros por ID
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	
	//los transformo en enteros y realizo la operacion correcta
	resultado = parseInt (numeroUno) - parseInt (numeroDos)
	
	//mostrar el resultado
	alert("La Resta es " + resultado);	

}

function multiplicar()
{ 
	//declaro las variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//tomo los numeros por ID
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	
	//los transformo en enteros y realizo la operacion correcta
	resultado = parseInt (numeroUno) * parseInt (numeroDos)
	
	//mostrar el resultado
	alert("La Multiplicación es " + resultado);	
}

function dividir()
{
	//declaro las variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//tomo los numeros por ID
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	
	//los transformo en enteros y realizo la operacion correcta
	resultado = parseInt (numeroUno) / parseInt (numeroDos)
	
	//mostrar el resultado
	alert("La División es " + resultado);
}

