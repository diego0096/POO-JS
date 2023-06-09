const diego = {
    name: 'Diego',
    age: 29,
    approvedCourses: ['Curso 1'],

    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses)
        this.approvedCourses.push(newCourse);
    }
};

Object.defineProperty(diego, 'navigator', {
    value: 'Chrome',
    enumerable: false,
    writable: true,
    configurable: true,
});

Object.defineProperty(diego, 'editor', {
    value: 'VSCode',
    enumerable: true,
    writable: false,
    configurable: true,
});

Object.defineProperty(diego, 'terminal', {
    value: 'WSL',
    enumerable: true,
    writable: true,
    configurable: false,
});

Object.defineProperty(diego, 'pruebaNASA', {
    value: 'extraterrestres',
    enumerable: false,
    writable: false,
    configurable: false,
});

console.log(Object.keys(diego));
console.log(Object.getOwnPropertyNames(diego));
console.log(Object.entries(diego));

Object.seal(diego);
Object.freeze(diego);

console.log(Object.getOwnPropertyDescriptors(diego));

function deepFreeze(obj) {
    if(typeof (obj) !== "object") {
        return Object.freeze(obj);
    }
    for (let key in obj) {
        deepFreeze(obj[key]);
    }
    return obj;
}

const a = JSON.parse('[1, 5, "false"]');

console.log(a);

// JSON.stringify and JSON.parse

const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e'
    },
    editA() {
        this.a = 'Abcd';
    },
}

const stringifiedComplexObj = JSON.stringify(obj1);
console.log(stringifiedComplexObj);

const obj2 = JSON.parse(stringifiedComplexObj);
console.log(obj2);

const obj3 = {
    name: "Diego",
    lastname: "Quijano",
    cellphone: 3127814908,
    email: "dfqz93@hotmail.com",
    ID: 1061762106
}

const stringObj3 = JSON.stringify(obj3);
console.log(stringObj3);

const parseObj3 = JSON.parse(stringObj3);
console.log(parseObj3);

const keys = Object.keys(obj3);
console.log(keys);

const entries = Object.entries(obj3);
console.log(entries);

const value = Object.values(obj3);
console.log(value);

const properties = Object.getOwnPropertyDescriptor(obj3);
console.log(properties); 

const prop = Object.getOwnPropertyDescriptors(obj3);
console.log(prop);

const arr = ["Diego", "Felipe", "Quijano", "Zuñiga"];

const pu = arr.push("Gabriela");
console.log(pu);

console.log(arr)

const sp = arr.slice("Gabriela");
console.log(sp);

console.log(arr);

const sl = arr.splice("Gabriela");
console.log(sl);

console.log(arr);

const arr2 = [1, 2, 3, 4, 5, 6, 7];

const m = arr2.map(element => element * 2);

console.log(m);

const f = arr2.forEach((element, i) => {console.log(element, i)}); 

const fil = arr2.filter(element => element === arr2[2] || element === 4)
console.log(fil);

let x, y, z;
[x, y] = [10, 20];
console.log(x);
console.log(y);

[x, y, ...z] = [10, 20, 30, 40, 50, 60, 70];
console.log(z);

const frutas = ["Manzana", "naranja", "Banano", "Pera"];
[, , , per] = frutas;
console.log(per);

const inc = frutas.includes(String);
console.log(inc);

const inc2 = frutas.includes("Pera");
console.log(inc2);

const inc3 = frutas.includes(typeof String);
console.log(inc3);

const palindrome = "eye";
let palin = [...palindrome];
// console.log(palin);
for (let i = 0; i < palin.length; i++) {
    var pal = palin[i];
    console.log(pal);
    if(pal === pal - 1) {
        return true;
    } else {
        return false;
    }
}
