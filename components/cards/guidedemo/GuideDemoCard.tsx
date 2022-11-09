import Image from 'next/image';
import Link from 'next/link';

import styles from './GuideDemoCard.module.css';

export interface IGuideDemoCard {
    title: string;
    description: string;
    imgStyle: string;
    url?: string;
    image?: string;
    columns?: string;
}

const GuideDemoCard: React.FC<IGuideDemoCard> = ({
    title,
    description,
    imgStyle,
    url = '#',
    image = 'https://via.placeholder.com/300',
    columns = 'four',
}) => {
    const imageStyle =
        imgStyle === 'rounded'
            ? styles['GuideDemoCard-image-rounded']
            : styles['GuideDemoCard-image-square'];

    return (
        <div className={`columns ${columns}`}>
            <div className={styles.GuideDemoCard}>
                {imgStyle !== 'none' ? (
                    <div>
                        <Image
                            src={image}
                            alt="Placeholder"
                            width={300}
                            height={300}
                            className={imageStyle}
                        />
                    </div>
                ) : null}
                <div className={styles.GuideDemoCard_title}>
                    <h4>
                        <Link href={url}>{title}</Link>
                    </h4>
                </div>
                <div className={styles.GuideDemoCard_content}>
                    <p>{description}</p>
                </div>
                <div className={styles.GuideDemoCard_links}>
                    <div className="row">
                        <div className="six columns">
                            <Link href={url}>Demo</Link>
                        </div>
                        <div className="six columns">
                            <Link href={url + '-guide'}>Guide</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideDemoCard;
