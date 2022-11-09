import Image from 'next/image';
import Link from 'next/link';

import styles from './GuideCard.module.css';

export interface IGuideCard {
    title: string;
    description: string;
    imgStyle: string;
    url?: string;
    image?: string;
    columns?: string;
}

const GuideCard: React.FC<IGuideCard> = ({
    title,
    description,
    imgStyle,
    url = '#',
    image = 'https://via.placeholder.com/300',
    columns = 'four',
}) => {
    const imageStyle =
        imgStyle === 'rounded'
            ? styles['GuideCard-image-rounded']
            : styles['GuideCard-image-square'];

    return (
        <div className={`columns ${columns}`}>
            <div className={styles.GuideCard}>
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
                <div className={styles.GuideCard_title}>
                    <h4>
                        <Link href={url}>{title}</Link>
                    </h4>
                </div>
                <div className={styles.GuideCard_content}>
                    <p>{description}</p>
                </div>
                <div className={styles.GuideCard_links}>
                    <div className="row">
                        <div className="u-full-width">
                            <Link href={url + '-guide'}>Guide</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideCard;
