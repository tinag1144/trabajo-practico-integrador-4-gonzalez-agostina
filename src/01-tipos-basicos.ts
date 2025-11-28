// 1. Tipos Básicos, Unión e Interfaces

// Tipos Fundamentales:
// 1. Declara una variable productName de tipo string y asígnale un valor.
// 2. Declara una variable productPrice de tipo número y asígnale un valor.
let productName: string = "Producto";

let productPrice: number = 1144;

// Tipo Unión (Union Type):
// 1. Declara una variable productId que pueda ser de tipo string o número.
// Asignale valores diferentes en líneas separadas para probar ambos tipos.
let productId: string | number;

productId = "PROD-1144"; 
console.log("productId (string):", productId);

productId = 111444;      
console.log("productId (number):", productId);

// Interfaz Básica:
// 1. Crea una interfaz Product con las propiedades name y price.
// 2. Declara una variable myProduct de tipo Product y asígnale un objeto con
// datos.
interface Product {
    name: string;
    price: number;
}

const myProduct: Product = {
    name: "Mouse Inalámbrico",
    price: 8999
};

console.log("myProduct:", myProduct);
