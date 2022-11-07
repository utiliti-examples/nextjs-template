import SidebarPageTemplate from '../../components/layouts/sidebarpage/SidebarPageTemplate';

import { NextPageWithLayout } from './page';

const CollectionWalletExplorer: NextPageWithLayout = () => {
    return (
        <SidebarPageTemplate sidebar={'Sidebar!!'}>
            <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
                <p>Single Page!</p>
            </section>
        </SidebarPageTemplate>
    );
};

export default CollectionWalletExplorer;
