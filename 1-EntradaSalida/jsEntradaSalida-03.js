/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
function mostrar()
{
	let nombreIngresado;
	// txtIdNombre;
	//opcion 1
	//nombreIngresado=txtIdNombre.value;

	//tomar un dato
	nombreIngresado = document.getElementById("txtIdNombre").value;
	alert(nombreIngresado);

}
*/

/*Se ingresará por id el valor de una compra de productos para el hogar. 
Se deberá agregar el iva (21%) y  luego se deberá restar el 5% en concepto de compra mayorista. 
El programa deberá mostrar por alert importe bruto, el iva, el importe con iva, 
el valor del descuento y el total a pagar.

parcial y recuperatorio 2018 1,2,3 ejercicios
*/
function mostrar()
{
	let importeBruto;
	let iva;
	let importeConIva;
	let valorDescuento;
	let importeTotal;

	importeBruto = document.getElementById("txtIdNombre").value;
	importeBruto = parseInt(importeBruto);

	importeConIva = parseInt(importeConIva);

	iva = importeBruto * 21 / 100;
	importeConIva = importeBruto + iva;
	valorDescuento = importeConIva * 5 / 100;
	importeTotal = importeConIva - valorDescuento;

	mensaje = "El importe bruto es: " + importeBruto + " El iva es: " + iva + " El importe con iva es: " + importeConIva +  " El valor del descuento: " + valorDescuento + " El importe total es: " + importeTotal;
	
	alert(mensaje);
}
