import classNames from 'classnames/bind';
import styles from './Header.modul.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
