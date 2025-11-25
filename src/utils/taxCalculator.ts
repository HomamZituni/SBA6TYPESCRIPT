export function calculateTax(price: number, category: string): number {
const standardTax = 0.0475;
const groceriesTax = 0.03;
const taxRate = category.toLowerCase() === 'groceries' ? groceriesTax : standardTax; return price * taxRate;
}