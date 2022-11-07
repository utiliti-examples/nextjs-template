import styles from './Header.module.css';

export interface IHeader {
    headerTextProp: string;
}

const Header: React.FC<IHeader> = ({ headerTextProp }) => {
    return <h1>{headerTextProp}</h1>;
};

export default Header;
