var age = 28;

{
    console.log("valor dentro del bloque", age);
    var age = 29;
}

console.log("valor fuera del bloque", age);
age = age * 2;
console.log("valor cambiado", age);

let age1 = 28;

{
    console.log("valor dentro del bloque", age1);
    let age1 = 29;
}

console.log("valor fuera del bloque", age1);
age1 = age1 * 2;
console.log("valor cambiado", age1);

const pi = 3.1416
pi = 3.1415
console.log(pi);