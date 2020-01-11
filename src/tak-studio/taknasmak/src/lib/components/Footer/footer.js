import React from 'react';
import { shape, string } from 'prop-types';
import { useFooter } from '@magento/peregrine/lib/talons/Footer/useFooter';

import { mergeClasses } from '~veniaUi/lib/classify';
import defaultClasses from './footer.css';
import GET_STORE_CONFIG_DATA from '../../queries/getStoreConfigData.graphql';

const Footer = props => {
    const classes = mergeClasses(defaultClasses, props.classes);

    const talonProps = useFooter({
        query: GET_STORE_CONFIG_DATA
    });
    const { copyrightText } = talonProps;

    let copyright = null;
    if (copyrightText) {
        copyright = <span>{copyrightText}</span>;
    }

    return (
        <footer className={classes.root}>
            <div className="row">
                <div className="col span-1-of-2">
                    <ul className="footer-nav">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">iOS App</a></li>
                        <li><a href="#">Android App</a></li>
                    </ul>
                </div>
                <div className="col span-1-of-2">
                    <ul className="social-links">
                        <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                        <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                        <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
                        <li><a href="#"><i className="ion-social-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p>
                    {copyright}
                </p>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    classes: shape({
        copyright: string,
        root: string,
        tile: string,
        tileBody: string,
        tileTitle: string
    })
};

export default Footer;
