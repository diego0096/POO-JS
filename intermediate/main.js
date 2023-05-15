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

console.log(Object.keys(diego));
console.log(Object.getOwnPropertyNames(diego));
console.log(Object.entries(diego));
console.log(Object.getOwnPropertyDescriptors(diego));

Object.defineProperty(diego, 'pruebaNASA', {
    value: 'extraterrestres',
    enumerable: true,
    writable: true,
    configurable: true,
})