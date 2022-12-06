class Phone {
    constructor (yearOfCreation, memory, price) {
        this.yearOfCreation = yearOfCreation;
        this.memory = memory;
        this.price = price;
    }

    calculatePrice() {
        return Math.round((this.memory * 3 + this.price) / 10);
    }

    calculateAge() {
        return 2022 - this.yearOfCreation;
    }

    description() {
        return `This is ${this.nameClass}, he is ${(this.calculateAge())} year old and costs ${(this.calculatePrice())} dollars`
    }
}

class Redmi extends Phone {
    constructor (yearOfCreation, memory, price, color = 'silver', nameClass = 'Redmi') {
        super (yearOfCreation, memory, price)
        this.color = color;
        this.nameClass = nameClass;
    }
}

class Poco extends Phone {
    constructor (yearOfCreation, memory, price, color = 'white', nameClass = 'Poco') {
        super (yearOfCreation, memory, price)
        this.color = color;
        this.nameClass = nameClass;
    }
}

class Huawei extends Phone {
    constructor (yearOfCreation, memory, price, color = 'pink', nameClass = 'Huawei') {
        super (yearOfCreation, memory, price)
        this.color = color;
        this.nameClass = nameClass;
    }
}

const redmi = new Redmi(2013, 128, 9000)
const poco = new Poco(2018, 256, 14000)
const huawei = new Huawei(2010, 32, 5000)

console.log (redmi.description() + '\n', poco.description() + '\n', huawei.description() + '\n')