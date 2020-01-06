import React, { Component } from 'react';

import classify from '~veniaUi/lib/classify';
import defaultClasses from './topbar.scss';
import { shape, string } from 'prop-types';

class TopBar extends Component {
    static propTypes = {
        classes: shape({
            root: string
        })
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                TakNaSMAK
            </div>
        );
    }
}

export default classify(defaultClasses)(TopBar);
