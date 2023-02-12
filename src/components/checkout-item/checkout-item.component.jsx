import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const addItemToCartHandler = () => addItemToCart(cartItem);
    const removeItemFromCartHandler = () => removeItemFromCart(cartItem);
    const clearCartItemHandler = () => clearItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img alt={`${name}`} src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemFromCartHandler}>
                    &minus;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemToCartHandler}>
                    &#43;
                </div>
            </span>
            <span className='price'>{`$${price}`}</span>
            <div className='remove-button'>
                <button onClick={clearCartItemHandler}>&#10005;</button>
            </div>
        </div>
    );
}

export default CheckoutItem;