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