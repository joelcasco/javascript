// Se le da la bienvenida al conversor y ademas se declara la funcion 

do {
  
   function bienvenida(numero1, operador) {
      
          {switch (operador) {
              case "usd":
                  return alert(numero1 * 130,25)
      
              case "eur":
                  return alert(numero1 * 130,50)
      
              case "%":
                      return alert(numero1 * 1.50)
              default:
                  alert("El operador ingresado no existe, vuelva a intentarlo")
                  break;
              } 
          }   
          
  }
  
  let valor1 = Number(prompt("\n. Bienvenido al conversor de monedas \n. Ingresa el valor que desea convertir"))
  let operacion = prompt("ingrese la moneda que desea:  \n. usd \n. eur \n. % ")
  bienvenida( valor1, operacion);


   

} while (confirm("desea continuar?"));

alert("Gracias por utilizar este conversor")

