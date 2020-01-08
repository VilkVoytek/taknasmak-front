import React, { Suspense } from 'react';
import { shape, string } from 'prop-types';

import Logo from '~veniaUi/lib/components/Logo';
import { Link, resourceUrl, Route } from '@magento/venia-drivers';

import CartTrigger from '~veniaUi/lib/components/Header/cartTrigger';
import NavTrigger from '~veniaUi/lib/components/Header/navTrigger';
import SearchTrigger from '~veniaUi/lib/components/Header/searchTrigger';
import OnlineIndicator from '~veniaUi/lib/components/Header/onlineIndicator';
import { useHeader } from '@magento/peregrine/lib/talons/Header/useHeader';

import { mergeClasses } from '~veniaUi/lib/classify';
import defaultClasses from '~veniaUi/lib/components/Header/header.css';

const SearchBar = React.lazy(() => import('~veniaUi/lib/components/SearchBar'));

const Header = props => {
    const {
        handleSearchTriggerClick,
        hasBeenOffline,
        isOnline,
        searchOpen
    } = useHeader();

    const classes = mergeClasses(defaultClasses, props.classes);
    const rootClass = searchOpen ? classes.open : classes.closed;
    const searchBarFallback = (
        <div className={classes.searchFallback}>
            <div className={classes.input}>
                <div className={classes.loader} />
            </div>
        </div>
    );
    const searchBar = searchOpen ? (
        <Suspense fallback={searchBarFallback}>
            <Route
                render={({ history, location }) => (
                    <SearchBar
                        isOpen={searchOpen}
                        history={history}
                        location={location}
                    />
                )}
            />
        </Suspense>
    ) : null;

    return (
        <header className={rootClass}>
            <div className={classes.toolbar}>
                <div className={classes.primaryActions}>
                    <NavTrigger />
                    
                    sdfsdfsdfsdf
                    
                </div>
                <OnlineIndicator
                    hasBeenOffline={hasBeenOffline}
                    isOnline={isOnline}
                />
                <Link to={resourceUrl('/')}>
                    <Logo classes={{ logo: classes.logo }} />
                </Link>
                <div className={classes.secondaryActions}>
                    <SearchTrigger
                        active={searchOpen}
                        onClick={handleSearchTriggerClick}
                    />
                    <CartTrigger />
                </div>
            </div>
            {searchBar}
        </header>
    );
};

Header.propTypes = {
    classes: shape({
        closed: string,
        logo: string,
        open: string,
        primaryActions: string,
        secondaryActions: string,
        toolbar: string
    })
};

export default Header;