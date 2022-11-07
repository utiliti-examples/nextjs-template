import Head from 'next/head';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import styles from './SinglePageTemplate.module.css';

export interface ISinglePageTemplate
    extends React.ComponentPropsWithoutRef<'div'> {}

const SinglePageTemplate: React.FC<ISinglePageTemplate> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Utiliti Examples</title>
            </Head>
            <div className="row">
                <div className="two columns">&nbsp;</div>
                <div className="eight columns">
                    <Header headerTextProp="Utiliti Examples" />
                </div>
                <div className="two columns">&nbsp;</div>
            </div>
            <div className="row">
                <div className="two columns">&nbsp;</div>
                <div className="eight columns offset">{children}</div>
                <div className="two columns">&nbsp;</div>
            </div>
            <div className="row">
                <div className="two columns">&nbsp;</div>
                <div className="eight columns">
                    <Footer />
                </div>
                <div className="two columns">&nbsp;</div>
            </div>
        </>
    );
};

export default SinglePageTemplate;
