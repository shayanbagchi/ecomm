import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context.jsx';

import Button, { BUTTON_TYPE_CLASS } from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.components.jsx';

import {
    CartDropdownContainer, 
    CartItems, 
    EmptyMessage 
} from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const toggleCart = () => setIsCartOpen(!isCartOpen);


    const goToCheckoutHandler = () => {
        navigate('/checkout');
        toggleCart();
    }


    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) => 
                        <CartItem key={item.id} cartItem={item}/>
                    )) : (
                        <EmptyMessage>Your cart is empty.</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;