import SinglePageTemplate from '../components/layouts/singlepage/SinglePageTemplate';
import Card from '../components/cards/Card';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
    return (
        <div className="row">
            <Card
                title="Collection / Wallet Explorer"
                description="Navigate through NFT collections and wallets.  View NFTs in a collection or wallet."
                imgStyle="none"
                url="/collection-wallet-explorer"
            />
        </div>
    );
};

export default Home;

Home.getLayout = (page) => {
    return <SinglePageTemplate>{page}</SinglePageTemplate>;
};
