/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
Mariel Gutierrez
TP 4 A+B+C+D con IF 
*/

function CalcularPrecio()
{
    let cantidadLamparas;
    let descuento;
    let precioSinDescuento;
    let marca;
    let precioFinal;
    let porcentaje;
    let porcentajeIngresosBrutos;
    let impuesto;
    let precioConIngresosBrutos;


    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById("Marca").value;
    precioSinDescuento = 35 * cantidadLamparas;

    if (cantidadLamparas >= 6)
    {
        porcentaje = 50;
    }
    else 
    {
        if (cantidadLamparas == 5)
        {
            if (marca == "ArgentinaLuz")
            {
                porcentaje = 40;
            }
            else
            {
                porcentaje = 30;
            }     
        }
        else 
        {
            if (cantidadLamparas == 4)
            {
                 if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                 {
                    porcentaje = 25;
                 }
                 else
                 {
                    porcentaje = 20;
                 }
            }
            else
            {
                if (cantidadLamparas == 3)
                {
                    if (marca == "ArgentinaLuz")
                    {
                        porcentaje = 15
                    }
                    else
                    {
                        if (marca == "FelipeLamparas")
                        {
                            porcentaje = 10
                        }
                        else
                        {
                            porcentaje = 5
                        }
                    }
                }
                else
                {
                    porcentaje = 0;
                }
            }
        }
    }

    descuento = precioSinDescuento * porcentaje /100;
    precioFinal = precioSinDescuento - descuento;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if (precioFinal >=120)
    {
        porcentajeIngresosBrutos = 10;
    }
    else
    {
        porcentajeIngresosBrutos = 0;
    }

    impuesto =  precioFinal * porcentajeIngresosBrutos /100;
    precioConIngresosBrutos = precioFinal + impuesto;

    alert("Usted pago " + impuesto + " de IIBB.");

    document.getElementById("txtIdprecioDescuento").value = precioConIngresosBrutos;

}


/*
EN EN CUADRO "PRECIO CON DESCUENTO" NO APARECE EL PRECIO CON INGRESOS BRUTOS

 function CalcularPrecio () 
 {   
     let lampara;
    let cantidadLamparas;
     let precioCantidadLamparas;
     let marca;
 
     lampara = 35;
 
     cantidadLamparas = document.getElementById("txtIdCantidad").value;
     marca = document.getElementById("Marca").value;
 
     lampara = parseInt(lampara);
 
     cantidadLamparas = parseInt(cantidadLamparas);
     
     precioCantidadLamparas = (lampara * cantidadLamparas);
 
  
     if (cantidadLamparas >= 6)
     {
         precioFinal = precioCantidadLamparas - (precioCantidadLamparas * 50 / 100);
         //precioFinal1 = precioCantidadLamparas - precioDescuento1;
         document.getElementById("txtIdprecioDescuento").value = precioFinal;
     }
     else
     {
         //precioFinal = (lampara * cantidadLamparas)
         document.getElementById("txtIdprecioDescuento").value = precioCantidadLamparas;
         
         if (cantidadLamparas == 5)
         {
             if (marca == "ArgentinaLuz")
             {
                 precioFinal = precioCantidadLamparas - (precioCantidadLamparas * 40 / 100);
                 //precioFinal2 = precioCantidadLamparas - precioDescuento2;
             }
             else
             {
                 precioFinal = precioCantidadLamparas - (precioCantidadLamparas * 30 / 100);
                 //precioFinal3 = precioCantidadLamparas - precioDescuento3;

                 if (cantidadLamparas == 4)
                 {
                     if (marca == "ArgentinaLuz" && marca == "FelipeLamparas")
                     {
                         precioFinal = precioCantidadLamparas - (precioCantidadLamparas * 25 / 100);
                     }
                     else
                     {
                         precioFinal = precioCantidadLamparas - (precioCantidadLamparas * 20 / 100);
                     }
                 }
             }
         }
     }

     document.getElementById("txtIdprecioDescuento").value = precioFinal;
 }


 HACER PARA LA PROX CLASE C, D Y E
*/