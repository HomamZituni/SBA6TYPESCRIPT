//Export product
export class Product {
id:number;
title: string;
price: number; 
category: string;
discountPercentage: number;
}

// Constructor to initialize
constructor (id: number, title: string, price: number, category: string, discountPercentage: number) {
this.id = id;
this.title = title;
this.price = price;
this.category = category;
this.discountPercentage = discountPercentage;
}

// Display detail method
displayDetails() {
 console.log(`Product: ${this.title}`);
    console.log(`Category: ${this.category}`);
    console.log(`Price: $${this.price}`);
    console.log(`Discount: ${this.discountPercentage}%`);
}

// getPriceWithDiscount

getPriceWithDiscount(): number {
return this.price - (this.price * this.discountPercentage /100);
}

