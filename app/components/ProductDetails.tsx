import { ProductProps } from '../../types/product';

export function ProductDetails({product}: ProductProps) {
    return(
        <section className="max-w-3xl bg-gray mx-auto p-6 rounded-lg shadow-md">
            {product.image}.forEach((image) => {
                // multiple images will appear in a slide
                return(
                <img src ={product.image} alt= {product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                );
            });

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