class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = owner;

        if (owner.age < 18) {
            console.log("Власник автомобіля повинен бути старше 18 років.");
        }
    }

    displayInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік виписки: ${this.year}, Номерний знак: ${this.licensePlate}`);
        console.log("Інформація про власника:");
        this.owner.displayInfo();
    }
}

const person1 = new Human("Іван", 25);
const person2 = new Human("Марія", 30);

const car1 = new Car("Toyota", "Camry", 2022, "AB123CD", person1);
const car2 = new Car("Honda", "Civic", 2020, "XY789ZQ", person2);

console.log("Інформація про автомобілі та їх власників:");
car1.displayInfo();
console.log("\n");
car2.displayInfo();
