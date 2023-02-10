/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declare variable
	let numeroUno;
	let numeroDos;
	let resultado;

	//las tomo por Id
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	// los números los convierto con parseInt
	resultado = parseInt (numeroUno) + parseInt (numeroDos)
	alert( "la suma es " + resultado);
}

