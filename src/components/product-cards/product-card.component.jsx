import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context.jsx';

import Button, { BUTTON_TYPE_CLASS } from '../button/button.component.jsx';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductTOCart = () => addItemToCart(product);

    return(
        <div className='product-card-container'>
            <img alt={`${name}`} src={imageUrl}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={addProductTOCart}>ADD TO CART</Button>
        </div>
    );
}

export default ProductCard;