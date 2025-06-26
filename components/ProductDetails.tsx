import { ProductProps } from '../types/product';

//using map to return an array of images
export function ProductDetails({product}: ProductProps) {
    return(
        <section className="max-w-3xl bg-gray mx-auto p-6 rounded-lg shadow-md">
           
            {Array.isArray(product.images) && product.images.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
                />
                
            ))}
           <h2 className=" text-4xl font-bold mb-3">
            {product.name}
            </h2>
            <p className=" text-md text-gray-500 mb-4">
                {product.description}
            </p>
            <p className="text-2xl font-semibold text-green-500">
                {product.price.toFixed(2)}
            </p>
            
        </section>
    )
}