import React from 'react';
import {func, number, objectOf, shape, string} from 'prop-types';
import { mergeClasses } from '~veniaUi/lib/classify';
import defaultClasses from './megamenu.css';
import { useCatalogContext } from '@magento/peregrine/lib/context/catalog';

const Megamenu = (props) => {

    const [catalogState, { actions: catalogActions }] = useCatalogContext();

    const { categories, rootCategoryId } = catalogState;
    
    const classes = mergeClasses(defaultClasses, props.classes);
    
    const renderMenu = Object.values(categories).map(item => {
        if (rootCategoryId !== item.id) {
            return (
                <li key={item.id}>
                    <a href="/">{item.name}</a>
                </li>
            );
        }
    });
    
    return <ul className={classes.mainNav}>{renderMenu}</ul> //Todo: functionality is not ready yet
};

Megamenu.propTypes = {
    classes: shape({
        root: string
    })
};

export default Megamenu;