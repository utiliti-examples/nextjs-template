import Image from 'next/image';

import DefaultTemplate from '../../components/layouts/default/DefaultTemplate';

import styles from './index.module.css';

import { NextPageWithLayout } from './page';

const ContractEventWebhooks: NextPageWithLayout = () => {
    return (
        <>
            <div className="row">
                <div className={styles.rowHeader}>
                    <h1>Getting Started</h1>
                </div>
                <div className={styles.rowContent}>
                    <span>
                        In this guide we will walk you through setting up a
                        Discord webhook to receive contract events from the
                        Utiliti platform.
                    </span>
                </div>
                <div className={styles.rowHeader}>
                    <h2>Goals</h2>
                </div>
                <div className={styles.rowContent}>
                    <ul>
                        <li>Send contract events to a channel in Discord</li>
                    </ul>
                </div>
                <div className={styles.rowHeader}>
                    <h2>Guide</h2>
                </div>
                <div className={styles.rowContent}>
                    <ul>
                        <li>
                            Utiliti Console - Create Application
                            <ul>
                                <li>Log into the Utiliti console</li>
                                <li>
                                    Click on the &quot;Applications&quot; tab
                                </li>
                                <li>
                                    Click on the &quot;Create Application&quot;
                                    button
                                </li>
                                <li>Enter a name for your application</li>
                                <li>Click on the &quot;Create&quot; button</li>
                            </ul>
                            <Image
                                src="/img/contract-event-webhooks-discord-guide/create-application.png"
                                alt="Create Application"
                                width={455}
                                height={271}
                            />
                        </li>
                        <li>
                            Utiliti Console - Add Contract
                            <ul>
                                <li>
                                    Click on the &quot;Contracts&quot; tab
                                    inside your application
                                </li>
                                <li>
                                    Click on the &quot;Add an existing
                                    contract&quot; button
                                </li>
                                <li>Enter a name for the contract</li>
                                <li>Enter the contract address</li>
                                <li>
                                    Select the network where the contract exists
                                </li>
                                <li>
                                    Enter the ABI of the contract. You can
                                    obtain this from the contract on Etherscan
                                    or if you built the contract, you will have
                                    this already.
                                </li>
                                <li>Click the &quot;Create&quot; button</li>
                            </ul>
                            <Image
                                src="/img/contract-event-webhooks-discord-guide/add-contract.png"
                                alt="Create Application"
                                width={625}
                                height={539}
                            />
                        </li>
                        <li>
                            Discord - Create Webhook
                            <ul>
                                <li>
                                    Click the edit channel icon of the channel
                                    you want to send the webhook to
                                </li>
                                <li>Click on &quot;Integrations&quot;</li>
                                <li>Click on &quot;Webhooks&quot;</li>
                                <li>Click on &quot;New Webhook&quot;</li>
                                <li>Enter a name for the webhook</li>
                                <li>
                                    Click on &quot;Copy&quot; to copy the
                                    webhook URL, save this for the next step
                                </li>
                                <li>Click on &quot;Save&quot;</li>
                            </ul>
                            <Image
                                src="/img/contract-event-webhooks-discord-guide/discord-create-webhook.png"
                                alt="Create Application"
                                width={769}
                                height={547}
                            />
                        </li>
                        <li>
                            Utiliti Console - Integrations / Webhooks
                            <ul>
                                <li>
                                    Click on the &quot;Integrations&quot; tab
                                    inside your application
                                </li>
                                <li>
                                    Click the &quot;Create Webhook&quot; button
                                </li>
                                <li>
                                    Paste the webhook URL from Discord in the
                                    previous step
                                </li>
                                <li>
                                    Select the events you want sent to Discord
                                </li>
                                <li>Click the &quot;Create&quot; button</li>
                            </ul>
                            <Image
                                src="/img/contract-event-webhooks-discord-guide/utiliti-console-create-webhook.png"
                                alt="Create Application"
                                width={813}
                                height={685}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ContractEventWebhooks;

ContractEventWebhooks.getLayout = (page) => {
    return <DefaultTemplate>{page}</DefaultTemplate>;
};
