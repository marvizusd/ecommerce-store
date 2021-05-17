import { useState, useContext} from 'react'
import { CartContext, CartUpdate } from '../contexts/CartContext'
import Cart from './Cart'

function Header () {
    const [cartHidden, setCartHidden] = useState(true)
    const [cart] = useContext(CartContext)

    const toggleCart = () => {
        setCartHidden(!cartHidden)
    }

    const cartLength = () => {
        return Object.keys(cart.items).length
    }
    
    return (
        <>
            <header className="flex justify-between bg-gray-100">
                <div className="my-5 ml-20">
                    E-commerce Test Store
                </div>
                <div className="my-5 mr-20">
                    <button id="cart-button" className="lighter-text" onClick={() => toggleCart()}>
                        ({cartLength()})
                    </button>
                </div>
            </header>
            <Cart
                cart={cart}
                isCartHidden={cartHidden}
                cartLength={cartLength}
                toggleCart={toggleCart}
            />
        </>
    )
}

export default Header;