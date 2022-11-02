import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Utiliti Example Apps</title>
                <meta
                    name="description"
                    content="Example applications built with Utiliti.ai API"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <br></br>
            <br></br>
            <div className="row">
                <div className="column">
                    <h1>
                        <a href="https://utiliti.ai">Utiliti.ai</a> Example
                        Applications Template
                    </h1>
                </div>
            </div>

            {/* Sub Header */}
            <div className="row">
                <div className="u-full-width">
                    <p>Building Web3 applications with Utiliti!</p>
                </div>
            </div>

            <div className="row">
                <div className="four columns">
                    <div className="row">
                        <div className="two columns">One</div>
                        <div className="ten columns">Two</div>
                    </div>
                </div>
                <div className="four columns">
                    <div className="row">
                        <div className="two columns">One</div>
                        <div className="ten columns">Two</div>
                    </div>
                </div>
                <div className="four columns">
                    <div className="row">
                        <div className="two columns">One</div>
                        <div className="ten columns">Two</div>
                    </div>
                </div>
            </div>

            <footer>
                <a
                    href="https://utliti.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span>
                        <Image
                            src="/img/utiliti.svg"
                            alt="Utiliti Logo"
                            width={72}
                            height={32}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}
