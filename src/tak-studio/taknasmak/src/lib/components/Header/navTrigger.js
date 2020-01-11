import React from 'react';
import { node, shape, string } from 'prop-types';
import { mergeClasses } from '~veniaUi/lib/classify';
import defaultClasses from './navTrigger.css';
import { useNavigationTrigger } from '@magento/peregrine/lib/talons/Header/useNavigationTrigger';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

/**
 * A component that toggles the navigation menu.
 */
const NavigationTrigger = props => {
    
    const { handleOpenNavigation } = useNavigationTrigger();

    const classes = mergeClasses(defaultClasses, props.classes);
    
    return (
        <IconButton
            className={classes.root} 
            color="inherit" 
            aria-label="menu"
            onClick={handleOpenNavigation}
        >
            <MenuIcon fontSize="small" />
        </IconButton>
    )
};

NavigationTrigger.propTypes = {
    children: node,
    classes: shape({
        root: string
    })
};

export default NavigationTrigger;
