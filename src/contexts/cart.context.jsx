import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, prouctToAdd) => {
    const existinCartItem = cartItems.find(
        (cartItem) => cartItem.id === prouctToAdd.id
    );

    if(existinCartItem) {
        return (
            cartItems.map((cartItem) => 
                cartItem.id === prouctToAdd.id
                    ? { ...cartItem, quantity : cartItem.quantity + 1 }
                    : cartItem    
            )
        );
    }

    return (
        [...cartItems, { ...prouctToAdd, quantity: 1 }]
    );
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existinCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if(existinCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    
    return (
        cartItems.map((cartItem) => 
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity : cartItem.quantity -  1 }
                : cartItem    
        )
    );
}

const clearCartItem = (cartItems, cartItemToClear) => (
        cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
    );

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (prouctToAdd) => {
        setCartItems(addCartItem(cartItems, prouctToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    }

    const value = {
        isCartOpen, 
        setIsCartOpen, 
        cartItems, 
        addItemToCart, 
        removeItemFromCart, 
        clearItemFromCart, 
        cartCount,
        cartTotal
    };

    return(
        <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    );
}