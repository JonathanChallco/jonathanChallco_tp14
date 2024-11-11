//Arrays de Electrodomesticos !!
let productos = ["Refrigerador", "Microondas", "Licuadora", "Lavaropas", "Aspiradora", "Heladera"];
//                      0             1             2           3               4          5

// A)-------------
console.log(productos[1]);
console.log(productos[3]);

// B)-------------
let primerProducto = productos.shift();
productos.push(primerProducto);
console.log(productos);

// C)-------------
productos.push("Secadora", "Ventilador");
console.log(productos);

// D)-------------
console.log("Cantidad de productos:", productos.length);

// E)-------------
let productoBuscado = "Microondas";
if (productos.includes(productoBuscado)) {
    console.log("Producto encontrado");
}else {
    console.log("El producto buscado no existe");
}

// F)-------------
let productosCadena = productos.join(" ");
console.log("Cadena de productos:", productosCadena);

// G)-------------
console.log("Cantidad de caracteres en la cadena:", productosCadena.length);

// H)-------------
let productosCadenaModificada = productosCadena.replace("Horno", "Cafetera");
console.log("Cadena modificada:", productosCadenaModificada);

// I)-------------
let productosArrayModificado = productosCadenaModificada.split(" ");
console.log("Nuevo array de productos:", productosArrayModificado);
