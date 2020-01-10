import React from 'react';
import { shape, string } from 'prop-types';
import { ShoppingCart as ShoppingCartIcon } from 'react-feather';

import Icon from '~veniaUi/lib/components/Icon';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import { mergeClasses } from '~veniaUi/lib/classify';
import defaultClasses from './cartTrigger.css';
import { useCartTrigger } from '@magento/peregrine/lib/talons/Header/useCartTrigger';

const CART_ICON_FILLED = (
    <Icon
        src={ShoppingCartIcon}
        attrs={{
            fill: 'rgb(var(--venia-text))',
            stroke: 'rgb(var(--venia-text))'
        }}
    />
);
const CART_ICON_EMPTY = (
    <Icon
        src={ShoppingCartIcon}
        attrs={{
            stroke: 'rgb(var(--venia-text))'
        }}
    />
);

const CartTrigger = props => {
    const { handleClick, itemCount } = useCartTrigger();

    const classes = mergeClasses(defaultClasses, props.classes);
    const cartIcon = itemCount > 0 ? CART_ICON_FILLED : CART_ICON_EMPTY;
    const buttonAriaLabel = `Toggle mini cart. You have ${itemCount} items in your cart.`;

    const itemCounter = itemCount ? (
        <span className={classes.counter}>{itemCount}</span>
    ) : null;
    
    return (
        <IconButton
            
            className={classes.root}
            color="inherit"
            onClick={handleClick}
        >
            <Badge badgeContent={itemCounter} color="secondary">
                <ShoppingCartOutlinedIcon />
            </Badge>
        </IconButton>
    );
    
    
    /*
    <button
            className={classes.root}
            aria-label={buttonAriaLabel}
            onClick={handleClick}
        >
            {cartIcon}
            {itemCounter}
        </button>
     */
};

CartTrigger.propTypes = {
    classes: shape({
        root: string
    })
};

export default CartTrigger;
