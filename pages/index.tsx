import DefaultTemplate from '../components/layouts/default/DefaultTemplate';
import GuideCard from '../components/cards/guide/GuideCard';
import GuideDemoCard from '../components/cards/guidedemo/GuideDemoCard';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
    return (
        <div className="row">
            <GuideDemoCard
                title="Collection Explorer - NextJS"
                description="Display an NFT collection's assets.  Paginated collection listings.  Modal viewing NFT information & traits.  Implement filtering by ID, ID range, trait."
                imgStyle="none"
                url="/collection-explorer"
            />
            <GuideCard
                title="Contract Event Webhooks - Discord"
                description="Send contract events to Discord using Utiliti webhook alerts."
                imgStyle="none"
                url="/contract-event-webhooks-discord"
            />
        </div>
    );
};

export default Home;

Home.getLayout = (page) => {
    return <DefaultTemplate>{page}</DefaultTemplate>;
};
