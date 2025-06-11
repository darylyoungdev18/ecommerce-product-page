import Image from 'next/image';
import { ProductProps } from '../../types/product';

export function ProductHero( {product}: ProductProps){
    return(
        <section className ="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-x1 object-cover"
                />
                <div>
                    <h1 className="text-3xl font-bold mb-2">
                        {product.name}
                    </h1>
                    <p className="text-lg text-gray-600"> {product.brand} </p>
                    <p className="text-2xl font-semibold mt-4"> ${product.price.toFixed(2)} </p>
                    <p className="text-yellow-500"> Rating: {product.rating} &star; </p>
                </div>
        </section>
    );
}

