import styles from './header.module.css';
import igniteLogo from '../../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logo" />
    </header>
  );
}
