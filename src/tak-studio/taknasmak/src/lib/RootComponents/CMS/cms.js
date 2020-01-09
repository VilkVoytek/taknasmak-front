import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import cmsPageQuery from '~veniaUi/lib/queries/getCmsPage.graphql';
import { fullPageLoadingIndicator } from '~veniaUi/lib/components/LoadingIndicator';
import RichContent from '~veniaUi/lib/components/RichContent';
import { number } from 'prop-types';
import CategoryList from '~veniaUi/lib/components/CategoryList';

const CMSPage = props => {
    const { id } = props;
    const { loading, error, data } = useQuery(cmsPageQuery, {
        variables: {
            id: Number(id),
            onServer: false
        }
    });

    if (error) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(error);
        }
        return <div>Page Fetch Error</div>;
    }

    if (loading) {
        return fullPageLoadingIndicator;
    }

    if (data) {
        // Only render <RichContent /> if the page isn't empty and doesn't contain the default CMS Page text.
        if (
            data.cmsPage.content &&
            data.cmsPage.content.length > 0 &&
            !data.cmsPage.content.includes('CMS homepage content goes here.')
        ) {
            return <RichContent html={data.cmsPage.content} />;
        }

        return (
            <div>
                <h2>GET FOOD FAST — NOT FAST FOOD</h2>
            </div>
        );
    }
    return null;
};

CMSPage.propTypes = {
    id: number
};

export default CMSPage;
