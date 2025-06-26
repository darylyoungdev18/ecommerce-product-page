import { getProductByName } from '../utils/getProduct';
import { ProductHero } from '../components/ProductHero';
import { ProductDetails } from '../components/ProductDetails';



export default async function ProductPage() {
  const product = await getProductByName('UltraSoft Hoodie');
  if (!product) {
    return <div>Product not found</div>;
  }
  return(
    <main className="p-4 max-w-4x1 mx-auto">
      <ProductHero product={product}/>
      <div className=" mx-auto my-4">
      <ProductDetails product={product}/>
      </div>
    </main>

  );
}

