import Image from 'next/image';
import Link from 'next/link';

import styles from './Card.module.css';

export interface ICard {
    title: string;
    description: string;
    imgStyle: string;
    url?: string;
    image?: string;
    columns?: string;
}

const Card: React.FC<ICard> = ({
    title,
    description,
    imgStyle,
    url = '#',
    image = '/img/placeholder-300.png',
    columns = 'four',
}) => {
    const imageStyle =
        imgStyle === 'rounded'
            ? styles['card-image-rounded']
            : styles['card-image-square'];

    return (
        <div className={`columns ${columns}`}>
            <div className={styles.card}>
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
                <div className="card-title">
                    <h4>
                        <Link href={url}>{title}</Link>
                    </h4>
                </div>
                <div className="card-content">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
