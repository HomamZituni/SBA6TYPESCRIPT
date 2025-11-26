import {Product} from './models/Product';
import {fetchProducts} from './services/apiService';
import {calculateTax} from './utils/taxCalculator';
import {handleError, CustomError} from './utils/errorHandler';


async function main() {
try {
const productsData = await fetchProducts();
const products: Product[] = productsData.map(p => new Product(p.id, p.title, p.price, p.category, p.discountPercentage));

products.forEach(p => {
p.displayDetails();
console.log(`Price after discount: $${p.getPriceWithDiscount()}`);
console.log(`Tax: $${calculateTax(p.price, p.category)}`);
console.log('---------------------------');
    });
  } catch (error: any) {
    handleError(error);
  }
}


main(); 