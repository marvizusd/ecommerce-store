import React, { createContext, useState, useEffect, useMemo} from 'react'

import products from '../assets/data.json'

export const CartContext = createContext();
export const CartUpdate = createContext();

export function CartProvider ({ children }) {
    const [cart, setCart] = useState({ items: {}, total: 0 });

    const addToCart = (product) => {
        let newCart = {...cart}
        let productPrice = product.isSale ? parseFloat(product.salePrice).toFixed(2) : parseFloat(product.price).toFixed(2)

        if(!newCart.items[product.id]) {
            newCart = {
                ...newCart,
                items: {
                    ...cart.items,
                    [product.id]: { ...product, quantity: 1 }
                }
            };
            // Object.assign(newCart, {[product.id]: {...product, quantity: 1}})
        } else {
            const productData = {...newCart.items[product.id]};
            // // let newCartTotal = newCart.total + productPrice

            newCart = {
                ...newCart,
                items: {
                    ...cart.items,
                    [product.id]: {
                        ...productData,
                        quantity: productData.quantity + 1
                    }
                }
            }
            // mutates product quantity in state
            // newCart[product.id].quantity++
        }

        newCart = {...newCart, total: cart.total + productPrice }

        localStorage.setItem("cart", JSON.stringify(newCart))
        setCart(newCart)
    }

    // const updateCartTotal = (product) => {}
    
    const randomProduct = useMemo(() => 
        products[Math.floor(Math.random() * Math.floor(products.length))],
        []
    );
    
    useEffect(() => {
        let localStorageCart = null;
        
        try {
            localStorageCart = JSON.parse(localStorage.getItem('cart'))
        } catch (err) {
            console.log(err, 'error');
        }

        if(localStorageCart) {
            setCart(localStorageCart)   
        }
            
    },[])

    return (
        <CartContext.Provider value={[cart, randomProduct]}>
            <CartUpdate.Provider value={[addToCart]}>
                { children }  
            </CartUpdate.Provider>
        </CartContext.Provider>
    )
}