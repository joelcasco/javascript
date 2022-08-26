
function calcDolar(){
    let num1 = document.getElementById("num1").value;
    document.getElementById("rtaDlr").innerHTML = num1 * 144,86;
}

function calcBlue(){
    let num2 = document.getElementById("num2").value;
    document.getElementById("rtaBlue").innerHTML = num2 * 200;
}

function calcEuro(){
    let num3 = document.getElementById("num3").value;
    document.getElementById("rtaEur").innerHTML = num3 * 137,08;
}

// Evento onclick
let botonDlr = document.getElementById("calcDlr")
botonDlr.onclick = calcDolar

let botonBlue = document.getElementById("calcBlue")
botonBlue.onclick = calcBlue

let botonEur = document.getElementById("calcEur")
botonEur.onclick = calcEuro
// // Se le da la bienvenida al conversor y ademas se declara la funcion 

// do {
  
//    function bienvenida(numero1, operador) {
      
//           {switch (operador) {
//               case "usd":
//                   return alert(numero1 * 130,25)
      
//               case "eur":
//                   return alert(numero1 * 130,50)
      
//               case "%":
//                       return alert(numero1 * 1.50)
              
//               default:
//                   alert("El operador ingresado no existe, vuelva a intentarlo")
//                   break;
//               } 
//           }
//   }
  
//   const valor1 = Number(prompt("\n. Bienvenido al conversor de monedas \n. Ingresa el valor que desea convertir"))
//   const operacion = prompt("ingrese la moneda que desea:  \n. usd \n. eur \n. % ")
//   bienvenida( valor1, operacion);
  
//   //arrays
//   const historial = [valor1, operacion];
//   console.log(historial)

//   //creo una variable para almacenar en un array los operadores
//   const operadores = ["usd", "eur", "%"];
//   console.log(operadores)
// //   //uso el metodo push() para agregar monedas
// //   operadores.push("btc", "libra hesterlina")
// //   console.log(operadores)
// //   //uso el metodo pop() para quitar la el ultimo dato ya que no se usa mucho esa moneda
// //   operadores.pop()
// //   console.log(operadores)

// } while (confirm("desea continuar?"));

// alert("Gracias por utilizar este conversor")

// function mercado() {
//     const btc = {nombre:"btc, min: 22459 usd, max: 24883 usd, cierre: 23361 usd"}
//     const eth = {nombre: "eth, min: 1588 usd, max: 2017 usd, cierre: 1865 usd"}
//     const dai = {nombre: "dai, min: o.999 usd, max: 1.1 usd, cierre: 1 usd"}
  
//     const listaDeMercado = [btc, eth, dai];
// // se crea la funcion
//     function consulta() {
//         const busqueda = listaDeMercado.map(resultado => resultado.nombre)
//         console.log(busqueda)
//     }
//   //se crea una funcicion
//   function IncorporarNuevaMoneda() {
//     listaDeMercado.push({
//         nombre: prompt("ingrese nombre de la moneda"),
//         historia: prompt("cuando se fundo"),
//         precioMasAlto: prompt("ingrese su pico mas elevado")
//     })
//     console.log(listaDeMercado)
//   }
//   function consultaNuevaMoneda(params) {
//     const busquedaNombre = listaDeMercado.find(resultado => resultado.nombre === prompt("ingrese el nombre de la moneda"))
//     console.log(busquedaNombre)
//   }
//   console.log(consultaNuevaMoneda)

//   let ingreso = Number(prompt("Analizando mercado 24/7 \n \nEscoge una opcion: \n \n1. lista de mercado \n monedas: btc,dai,eth\n \n.2 ingresa la moneda que quisieras que haya analisis"))
//   if (ingreso == 1){
//     consulta()
// }
// if(ingreso == 2){
//    IncorporarNuevaMoneda()
// }}

// mercado()