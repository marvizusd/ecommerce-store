import { useContext } from 'react'
import { CartContext, CartUpdate } from '../contexts/CartContext'

function FeaturedSection () {
    const [cart, product] = useContext(CartContext)
    const [addToCart] =  useContext(CartUpdate)

    return (
        <div className="flex space-x-4 justify-center py-10">
            <div className="">
                <div>
                    {product.title}
                </div>
                <div>
                    {product.category}
                </div>
                <div>
                    <button onClick={()=> addToCart(product)}>Add to cart</button>
                </div>
            </div>
            <div>
                <img 
                    alt=""
                    src={product.image}
                />
            </div>
        </div>
    )
}

export default FeaturedSection;