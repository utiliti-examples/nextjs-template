import SinglePageTemplate from '../components/layouts/singlepage/SinglePageTemplate';
import Card from '../components/cards/Card';

import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = { pages: any }> = NextPage<P> & {
    getLayout?: (_page: ReactElement) => ReactNode;
    layout?: ComponentType;
};

const Home: NextPageWithLayout = ({ pages }) => {
    const pagesArray = Object.keys(pages).map(function (key) {
        return pages[key];
    });

    return (
        <SinglePageTemplate>
            {pagesArray.map((page) => {
                let { id, title, description, imgStyle, url, image, columns } =
                    page;

                imgStyle = image ? imgStyle : 'none';
                image = imgStyle !== 'none' ? image : undefined;
                columns = columns ? columns : 'four';
                url = url ? url : '#';

                return (
                    <Card
                        key={id}
                        title={title}
                        description={description}
                        imgStyle={imgStyle}
                        url={url}
                        image={image}
                        columns={columns}
                    />
                );
            })}
        </SinglePageTemplate>
    );
};

export default Home;

export async function getStaticProps() {
    const pages = require('./pages.json');

    return {
        props: { pages },
    };
}
