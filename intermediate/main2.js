const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },

    editA() {
        this.a = "aaaaaaaaaaaa";
    }
};

const obj2 = {};
for(prop in obj1) {
    obj2[prop] = obj1[prop];
};

const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1);

const stringifiedComplexObj = JSON.stringify(obj1);
const obj5 = JSON.parse(stringifiedComplexObj);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
/* let num = 0;
for(let i = 0; i < numeros.length; i++) {
    numeros = numeros[i]
    console.log({i, numeros})
} */

function recursiva(numbersArray) {
    if(numbersArray.length != 0) {
        const firstNum = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();
        return recursiva(numbersArray)
    }
}

function isObject(subject) {
    return typeof subject == "object"
}
function isArray(subject) {
    return Array.isArray(subject)
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject)

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for(key in subject) {
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }
    return copySubject;
}