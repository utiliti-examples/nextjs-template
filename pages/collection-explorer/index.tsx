import DefaultTemplate from '../../components/layouts/default/DefaultTemplate';

import { NextPageWithLayout } from './page';

const CollectionExplorer: NextPageWithLayout = () => {
    return <div className="row">Coming Soon!</div>;
};

export default CollectionExplorer;

CollectionExplorer.getLayout = (page) => {
    return <DefaultTemplate>{page}</DefaultTemplate>;
};
