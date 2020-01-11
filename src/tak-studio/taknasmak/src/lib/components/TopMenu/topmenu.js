import React from 'react';
import { shape, string } from 'prop-types';
import { mergeClasses } from '~veniaUi/lib/classify';
import defaultClasses from './topmenu.css';


const TopMenu = (props) => {
    
    const classes = mergeClasses(defaultClasses, props.classes);  
  
    return (
      <ul className={classes.mainNav}>
          <li><a href="/">Food delivery</a></li>
          <li><a href="/">How it works</a></li>
          <li><a href="/">Our cities</a></li>
          <li><a href="/">Sing In</a></li>
      </ul>
    );  
};

TopMenu.propTypes = {
    classes: shape({
        root: string
    })
};
export default TopMenu;