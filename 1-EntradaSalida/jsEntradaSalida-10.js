/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento (que ingresara el usuario por prompt) 
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let porcentajeDescuentoIngresado;
	let importeDescuento;
	let importeTotal;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseFloat(importe);

	porcentajeDescuentoIngresado = prompt("Ingrese un porcentaje");
	porcentajeDescuentoIngresado = parseFloat(porcentajeDescuentoIngresado);

	importeDescuento = importe * porcentajeDescuentoIngresado / 100;
	importeTotal = importe - importeDescuento;

	//importeTotal = importe * ((100 - porcentajeDescuentoIngresado) / 100);
	//importeTotal = importe * (1 - (porcentajeDescuentoIngresado / 100));

	document.getElementById("txtIdResultado").value = "El total a pagar es $" + importeTotal;

}

// parseInt = entero
// parseFloat = decimal