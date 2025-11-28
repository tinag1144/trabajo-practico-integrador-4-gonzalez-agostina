# **Actividad de Investigación – Glosario de Conceptos de TypeScript**

Esta sección reúne los conceptos clave vistos durante el trabajo práctico, explicados de manera simple y acompañados por ejemplos breves en TypeScript que ilustran su uso real. Su objetivo es servir como material de estudio rápido y como referencia dentro del proyecto.

---

## **1. Tipo (Type)**

Un *type* permite crear alias de tipos, ya sean primitivos, compuestos, uniones o estructuras más complejas. Se utiliza para nombrar tipos reutilizables y mejorar la claridad del código.

**Ejemplo:**

```ts
type ID = string | number;

let userId: ID = 1144;
userId = "AEG1144";
```

---

## **2. Interfaz (Interface)**

Una interfaz describe la forma de un objeto: qué propiedades tiene y de qué tipo son. Se usa para definir contratos más estructurados y para trabajar con código orientado a objetos.

**Ejemplo:**

```ts
interface User {
  name: string;
  email: string;
  age?: number; // opcional
}

const person: User = {
  name: "Agos",
  email: "agos@example.com"
};
```

---

## **3. Tipo Literal (Literal Type)**

Los tipos literales restringen una variable a un conjunto fijo de valores exactos. Son útiles para estados, validaciones y configuraciones.

**Ejemplo:**

```ts
let status: "active" | "inactive" | "banned";
status = "active";
```

---

## **4. Union Type**

Un union type permite que una variable acepte más de un tipo, sin perder control sobre los valores posibles. Ideal para casos donde un dato puede venir en dos formatos válidos.

**Ejemplo:**

```ts
let code: string | number;
code = 123;
code = "AG1144";
```

---

## **5. Enum**

Un `enum` define un conjunto de valores constantes con nombre. Se utiliza para representar categorías, estados o niveles de forma clara y legible.

**Ejemplo:**

```ts
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

const currentRole: Role = Role.Admin;
```

---

## **6. Función con Tipado (Typed Function)**

Las funciones en TypeScript especifican el tipo de sus parámetros y el tipo de retorno, lo que ayuda a evitar errores y a documentar mejor su comportamiento.

**Ejemplo:**

```ts
function sum(a: number, b: number): number {
  return a + b;
}
```

---

## **7. Clase (Class)**

Las clases permiten crear objetos con propiedades y métodos. TypeScript permite agregar visibilidad (`public`, `private`, etc.) y tipado estricto.

**Ejemplo:**

```ts
class Product {
  constructor(
    private name: string,
    private price: number
  ) {}

  getInfo(): string {
    return `${this.name} cuesta $${this.price}`;
  }
}

const item = new Product("Mouse", 5000);
```

---

## **8. Type Assertion**

Una *type assertion* le indica al compilador que confíe en que un valor tiene un tipo específico. Se usa cuando el desarrollador sabe más del dato que TypeScript.

**Ejemplo:**

```ts
let unknownValue: any = "Hola";
let length = (unknownValue as string).length;
```

---

## **9. Parámetro Opcional**

Permite definir argumentos que el usuario puede omitir al llamar a la función.

**Ejemplo:**

```ts
function greet(name: string, nickname?: string): string {
  return nickname ? `Hola ${name} (${nickname})` : `Hola ${name}`;
}
```

---

## **10. Rest Parameters**

Agrupan un número indeterminado de argumentos en un array.

**Ejemplo:**

```ts
function total(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

total(1, 2, 3, 4); // 10
```

---

