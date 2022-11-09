import DefaultTemplate from '../../components/layouts/default/DefaultTemplate';

import styles from './index.module.css';

import { NextPageWithLayout } from './page';

const CollectionExplorerGuide: NextPageWithLayout = () => {
    return (
        <>
            <div className="row">
                <div className={styles.rowHeader}>
                    <h1>Getting Started</h1>
                </div>
                <div className={styles.rowContent}>
                    <span>
                        This guide will walk you through setting up a simple
                        NextJS application to display an NFT collection&#39;s
                        assets, specific NFTs, and filter by traits.
                    </span>
                </div>
                <div className={styles.rowHeader}>
                    <h2>Goals</h2>
                </div>
                <div className={styles.rowContent}>
                    <ul>
                        <li>Dispaly paginated collection listings</li>
                        <li>Modal viewing NFT information &amp; traits</li>
                        <li>Implement filtering by ID, ID range, trait</li>
                    </ul>
                </div>
                <div className={styles.rowHeader}>
                    <h2>Guide</h2>
                </div>
                <div className={styles.rowContent}>Coming Soon!</div>
            </div>
        </>
    );
};

export default CollectionExplorerGuide;

CollectionExplorerGuide.getLayout = (page) => {
    return <DefaultTemplate>{page}</DefaultTemplate>;
};
