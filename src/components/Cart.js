function Cart ({cart, isCartHidden, cartLength}) {
    let isCartEmpty = Object.keys(cart).length === 0

    const displayPrice = (product) => {
        return (product.isSale) ? parseFloat(product.salePrice).toFixed(2) : parseFloat(product.price).toFixed(2)
    }

    console.log(cart)
    return (
        <>
            {!isCartHidden && !isCartEmpty ? (
                <div id="shopping-cart-container">
                    <div id="shopping-cart">
                        <div id="shopping-cart-header flex">
                            <div className="flex-auto">
                                <span className="lighter-text">Total: </span>
                                <span>${cart.total}</span>
                            </div>
                        </div>
                        <hr className="my-5"/>
                        <div id="shopping-cart-items" >
                            { Object.keys(cart.items).map((productId, index) => (
                                <div
                                    className="grid grid-rows-3 grid-flow-col gap-4"
                                    key={productId}
                                    id={productId}
                                >
                                    <div className="row-span-3">
                                        <img className="item-image" src={cart.items[productId].image} alt="" />
                                    </div>
                                    <p className="item-name col-span-2">{cart.items[productId].title}</p>
                                    <div className="flex space-x-4 col-span-2">
                                        <p  className="item-price"
                                            style={{ color: cart.items[productId].isSale ? 'red': 'black' }}>
                                                ${displayPrice(cart.items[productId])}
                                        </p>
                                        <p className="item-quantity">Quantity: {cart.items[productId].quantity}</p>
                                    </div>
                                </div>)
                            ) }
                        </div>
                        <div>
                            <button className="checkout-button p-3">CHECKOUT</button>
                        </div>
                    </div>
                </div>
            ): 
            ""
            }
        </>
    )
}

export default Cart;