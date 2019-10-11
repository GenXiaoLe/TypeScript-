interface UserType {
    firstName: string,
    lastName: string,
}

class Person {
    fullName: string;
    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + lastName;
    }
};

function greeter(person: UserType) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user_name = new Person('Allen', 'liang');

document.body.innerHTML = greeter(user_name);