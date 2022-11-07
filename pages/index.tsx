import SinglePageTemplate from '../components/layouts/singlepage/SinglePageTemplate';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
    return (
        <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
            <p>Single Page!</p>
        </section>
    );
};

export default Home;

Home.getLayout = (page) => {
    return <SinglePageTemplate>{page}</SinglePageTemplate>;
};
