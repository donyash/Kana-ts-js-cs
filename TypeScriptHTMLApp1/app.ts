class HelloWorld {
    constructor(public message: string) {
    }
}

interface IShoe {
    Name: string;
    Mileage: number;
    AlertMileage: number;
    IsActive: boolean;
    Id: number;
    DatePurchased: Date;
}
interface IShoes {
    Shoes: Array<string>;
    Shoe: IShoe;
}

class ShoeViewModel implements IShoe {
    Name: string;
    Mileage: number;
    AlertMileage: number;
    IsActive: boolean;
    Id: number;
    DatePurchased: Date;

    constructor(model: IShoe) {
        console.log('Constructor for ShoeViewModel fired.');

        this.Name = model.Name;
        this.Mileage = model.Mileage;
        this.AlertMileage = model.AlertMileage;
        this.IsActive = model.IsActive;
        this.DatePurchased = model.DatePurchased;
    }
} 



window.onload = () => {
   // var el = document.getElementById('content');
   // var greeter = new Greeter(el);
   // greeter.start();
};