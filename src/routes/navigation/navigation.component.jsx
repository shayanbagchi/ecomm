import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.components';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { NavigationContainer, LogoContainer, NavLinkContainer, NavLink } from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <NavLinkContainer>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                  currentUser ? (
                    <NavLink as='span' className='nav-link' onClick={signOutUser}>
                      SIGN OUT
                    </NavLink>
                  ) : (
                    <NavLink to='/auth'>
                      SIGN IN
                    </NavLink>
                  )
                }
                <NavLink to='/shop'>
                    <CartIcon/>
                </NavLink>
            </NavLinkContainer>
            { isCartOpen && <CartDropdown/> }
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    );
  }

export default Navigation;