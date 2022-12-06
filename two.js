class IPhone {
    constructor (yearOfCreation, memory, price, color = 'silver') {
        this.yearOfCreation = yearOfCreation;
        this.memory = memory;
        this.price = price;
        this.color = color;
    }
}

class Xiaomi {
    constructor (yearOfCreation, memory, price, color = 'white') {
        this.yearOfCreation = yearOfCreation;
        this.memory = memory;
        this.price = price;
        this.color = color;
    }
}

class Huawei {
    constructor (yearOfCreation, memory, price, color = 'pink') {
        this.yearOfCreation = yearOfCreation;
        this.memory = memory;
        this.price = price;
        this.color = color;
    }
}

const iphone = new IPhone(2013, 128, 9000)
const xiaomi = new Xiaomi(2018, 256, 14000)
const huawei = new Huawei(2010, 32, 5000)

console.log (iphone, xiaomi, huawei)