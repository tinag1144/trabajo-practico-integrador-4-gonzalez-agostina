// 2. Funciones con Tipado

// Escribe una función llamada updateStock que acepte dos argumentos:
// currentStock: de tipo número (el stock actual).
// quantityChange: de tipo número (la cantidad a sumar o restar).
console.log(""); //un espacio vacio para diferenciar los desarrollos :p
console.log("----Punto 2----");

function updateStock(currentStock: number, quantityChange: number): number {
    return currentStock + quantityChange;
}

// Llama a la función y muestra el resultado en la consola.
const newStock = updateStock(100, -20);
console.log("Nuevo stock:", newStock);
