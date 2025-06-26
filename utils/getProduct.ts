import clientPromise from '../lib/mongodb';
import type { ProductProps } from '../types/product';

export async function getProductByName(p0: string){
  const client = await clientPromise;
  const db = client.db('ecommerce');
  //specify the field and value to find the one product 
  const product = await db.collection('products').findOne({ name: 'UltraSoft Hoodie' });
 if (!product){
  return null;
 }
 return{
    name: product.name,
    brand: product.brand,
    price: typeof product.price === "object" ? parseFloat(product.price.$numberDouble):product.price,
    rating:typeof product.rating === "object" ? parseFloat(product.rating.$numberDouble):product.rating,
    images: product.images,
    description: product.description,
    specs: product.specs  
 }
}