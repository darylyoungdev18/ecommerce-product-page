import clientPromise from '../lib/mongodb';
import { ProductHero } from '../components/product-hero';
import { ProductDetails } from '../components/product-details';
import { Recommendations } from '../components/recommendations';

async funtion getProduct(){
  const client = await clientPromise;
  const db = client.db('ecommerce');
  const product = await db.collection('products').findOne({ slug: 'product-slug' });
  return product;
}

export default async function ProductPage() {
  const product = await getProduct();
  if (!product) {
    return <div>Product not found</div>;
  }
  return(
    <main className="p-4 max-w-4x1 mx-auto">
      <ProductHero product={product}/>
      <ProductDetails product={product}/>
      <Recommendations/>
    </main>>

  );
}

