import Head from 'next/head';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import styles from './SidebarPageTemplate.module.css';

export interface ISidebarPageTemplate
    extends React.ComponentPropsWithoutRef<'div'> {}

const SidebarPageTemplate: React.FC<ISidebarPageTemplate> = ({ children }) => {
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
                    <div className="three columns sidebar-wrapper">
                        <div>Sidebar Content</div>
                    </div>
                    <div className="nine columns offset">{children}</div>
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

export default SidebarPageTemplate;
