import React from 'react'
import { shape, string } from 'prop-types';
import { mergeClasses } from '~veniaUi/lib/classify';
import defaultClasses from './banner.css';

const Banner = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    
    return (
        <div className={classes.header}>
            <div className={classes.bannerBox}>
                <h1>Goodbye junk food.<br />Hello super healthy meals.</h1>
                <a className="btn btn-full js--scroll-to-plans" href="#">I'm hungry</a>
                <a className="btn btn-ghost js--scroll-to-start" href="#">Show me more</a>
            </div> 
        </div>    
    );
};

Banner.propTypes = {
    classes: shape({
        header: string,
        bannerBox: string
    })
};

export default Banner;