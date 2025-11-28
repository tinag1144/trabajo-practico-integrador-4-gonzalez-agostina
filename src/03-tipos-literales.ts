// 3. Tipos Literales y Enums

// a. Tipos Literales:
// Crea una variable orderStatus que solo pueda tener uno de los siguientes
// valores exactos: "pending", "shipped", o "delivered".
//  Asigna uno de estos valores a "orderStatus”.
console.log("");
console.log("----Punto 3----");
let orderStatus: "pending" | "shipped" | "delivered";

orderStatus = "shipped";

console.log("orderStatus:", orderStatus);

// b. Enum:
// Declara un enum llamado LogLevel con los valores: "Info", "Warning", y
// "Error".
enum LogLevel {
    Info = "Info",
    Warning = "Warning",
    Error = "Error"
}

// Crea una función llamada logMessage que tome un argumento level de tipo
// LogLevel y un argumento message de tipo string. La función debe imprimir un
// mensaje que incluya el nivel y el mensaje.
function logMessage(level: LogLevel, message: string): void {
    console.log(`[${level}] ${message}`);
}

logMessage(LogLevel.Info, "El sistema inició correctamente.");
logMessage(LogLevel.Warning, "El stock está por debajo del mínimo.");
logMessage(LogLevel.Error, "No se pudo conectar a la base de datos.");
