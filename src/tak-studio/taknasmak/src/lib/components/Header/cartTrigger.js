import React from 'react';
import { shape, string } from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { mergeClasses } from '~veniaUi/lib/classify';
import defaultClasses from './cartTrigger.css';
import { useCartTrigger } from '@magento/peregrine/lib/talons/Header/useCartTrigger';


const CartTrigger = props => {
    const { handleClick, itemCount } = useCartTrigger();

    const classes = mergeClasses(defaultClasses, props.classes);

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
};

CartTrigger.propTypes = {
    classes: shape({
        root: string
    })
};

export default CartTrigger;
