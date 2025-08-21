import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
    return (
        <section id="products" className="max-container">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-5xl lg:text-[55px] font-palanquin font-bold mb-4">
                    Our <span className="text-coral-red">Popular</span> Products
                </h2>
                <p className="lg:max-w-lg font-montserrat text-slate-gray mb-8">
                    Experience our top collections shoes with high quality materials crafted to make your game fantastic. Be the <span className="font-bold text-coral-red">KING </span> of the game.
                </p>
                <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 max-sm:m-auto">
                    {products.map((product) => (
                        <PopularProductCard key={product.name} {...product}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularProducts;