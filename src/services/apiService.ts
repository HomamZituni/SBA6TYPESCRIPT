import fetch from 'node-fetch';

export interface ProductData {
  id: number;
  title: string;
  price: number;
  category: string;
  discountPercentage?: number;
}

interface ProductsApiResponse {
  products: ProductData[];
}


export async function fetchProducts(): Promise <any[]> {
try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) throw new Error('HTTP error! Status: ${response.status}');
    const data = (await response.json()) as ProductsApiResponse;

    return data.products; 
    } catch (error) {
    console.error('Error fetching products:', error);
    return [];
    }
}

