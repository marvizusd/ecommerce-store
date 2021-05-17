import { useContext } from 'react'
import { CartContext, CartUpdate } from '../contexts/CartContext'

function Checkout () {
    const [cart] = useContext(CartContext)

    const cartLength = () => {
        return Object.keys(cart).length
    }

    return (
        <div>
            <div>{cartLength()}</div>
            <p>Cart length</p>
        </div>
    )
}

export default Checkout;