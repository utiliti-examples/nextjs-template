import DefaultTemplate from '../../components/layouts/default/DefaultTemplate';
import BaseCard from '../../components/cards/base/BaseCard';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
    return (
        <div className="row">
            <BaseCard
                title="Collection Explorer"
                description="Display an NFT collection's assets.  Paginated collection listings.  Modal viewing NFT information & traits.  Implement filtering by ID, ID range, trait."
                imgStyle="none"
                url="/collection-explorer"
            />
        </div>
    );
};

export default Home;

Home.getLayout = (page) => {
    return <DefaultTemplate>{page}</DefaultTemplate>;
};
