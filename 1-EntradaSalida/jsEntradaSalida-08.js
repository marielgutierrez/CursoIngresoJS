/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaro las variables
	let dividendo;
	let divisor;
	let resultado;

	//tomo los numeros por ID
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	//realizo la operación correcta
	resultado = parseInt (dividendo) % parseInt (divisor)

	//mostrar el resto entre el dividendo y el divisor
	alert("El resto es " + resultado);
}
