import Head from 'next/head';

import Header from '../header/Header';
import Footer from '../footer/Footer';

// import styles from './DefaultTemplate.module.css';

export interface IDefaultTemplate
    extends React.ComponentPropsWithoutRef<'div'> {}

const DefaultTemplate: React.FC<IDefaultTemplate> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Utiliti Examples</title>
            </Head>
            <header>
                <div className="row">
                    <div className="two columns">&nbsp;</div>
                    <div className="eight columns">
                        <Header headerTextProp="Utiliti Examples" />
                    </div>
                    <div className="two columns">&nbsp;</div>
                </div>
            </header>
            <main>
                <div className="row">
                    <div className="two columns">&nbsp;</div>
                    <div className="eight columns offset">{children}</div>
                    <div className="two columns">&nbsp;</div>
                </div>
            </main>
            <footer>
                <div className="row">
                    <div className="two columns">&nbsp;</div>
                    <div className="eight columns">
                        <Footer />
                    </div>
                    <div className="two columns">&nbsp;</div>
                </div>
            </footer>
        </>
    );
};

export default DefaultTemplate;
