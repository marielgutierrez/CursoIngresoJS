/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaro variables
	let sueldo;
	let resultado;
	let aumento;

	//sueldo = txtIdSueldo.value;
	//aumento = parseInt(aumento); 
	//resultado = parseInt(resultado);

	//tomar el importe por ID
	sueldo = document.getElementById("txtIdSueldo").value;
	//document.getElementById("txtIdResultado").value = resultado 
	
	/* 
	transformarlo a entero (parseInt) 
	*error* esto no va arriba pq sino no suma los numeros *error*
	Ejemplo error: tengo 90 de sueldo y 9 de aumento, el resultado es 909
	Ejemplo correcto: tengo 90 de sueldo y 9 de aumento, el resultado es 99
	*/ 
	sueldo = parseInt(sueldo);
	
	//mostrar el importe con un aumento del 10% en el cuadro de texto "RESULTADO"
	aumento = sueldo * 10 / 100;
	resultado = sueldo + aumento;

	document.getElementById("txtIdResultado").value = resultado 
	//txtIdResultado.value = resultado;
	//alert (resultado); no me pide
}
