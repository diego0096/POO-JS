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
for (prop in obj1) {
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
    if (numbersArray.length != 0) {
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

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
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

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
};

const diego = deepCopy(studentBase);
Object.seal(diego);
diego.name = "Diego";
Object.isSealed(diego);
Object.isFrozen(diego);
/* Object.defineProperty(diego, "name", {
    value: "Diego",
    configurable:false,
}); */

function requiredParam(param) {
    throw new Error(param + " es obligatorio");
};

function createLearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    const private = {
        "_name": name,
        "_courses": courses,
    };

    const public = {
        get name() {
            return private["_name"]
        },
        set name(newName) {
            if (newName.length != 0) {
                private["_name"] = newName
            } else {
                console.warn("Tu nombre debe tener al menos 1 caracter");
            }
            return private["_name"]
        },
        get courses() {
            return private["_courses"]
        },
        set courses(newCourses) {
            if (newCourses.length != 0) {
                private["_courses"] = newCourses
            } else {
                console.warn("Tu nombre debe tener al menos 1 caracter");
            }
            return private["_courses"]
        },
    };

    return public;
}

function createStudent({
    name = requiredParam("name"),
    age,
    email = requiredParam("email"),
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    const private = {
        "_name": name,
        "_learningPaths": learningPaths,
    };
    const public = {
        email,
        age,
        approvedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        get name() {
            return private["_name"]
        },
        set name(newName) {
            if (newName.length != 0) {
                private["_name"] = newName
            } else {
                console.warn("Tu nombre debe tener al menos 1 caracter");
            }
            return private["_name"]
        },

        get learningPaths() {
            return private["_learningPaths"]
        },
        set learningPaths(newLp) {
            if(!newLp.name) {
                console.warn("Tu Lp no tiene nombre");
                return;
            };

            if(!newLp.courses) {
                console.warn("Tu Lp no tiene courses");
                return;
            };

            if(!isArray(newLp.courses)) {
                console.warn("Tu Lp no es una lista (*de cursos)");
                return;
            }
            private["_learningPaths"].push(newLp);
            
        },
        /* readName() {
            return private["_name"];
        },
        changeName(newName) {
            private["_name"] = newName;
        }, */
    };

    Object.defineProperty(public, "readName", {
        configurable: false,
    });

    Object.defineProperty(public, "changeName", {
        configurable: false,
    });
    
    return public;

    //Object returned RORO
    /* return {
        name,
        changeName(newName) {
            this.name = newName;
        },
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
    }; */
};

const juan = createStudent({
    name: "Juan",
    email: "dfqz93@hotmail.com",
    /* age: 18,
    twitter: "diego0096", */
});
