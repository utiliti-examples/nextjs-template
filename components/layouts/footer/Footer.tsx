import Image from 'next/image';
import styles from './Footer.module.css';

export interface IFooter extends React.ComponentPropsWithoutRef<'div'> {}

const Footer: React.FC<IFooter> = () => {
    return (
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
    );
};

export default Footer;
