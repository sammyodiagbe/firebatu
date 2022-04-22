import Link from "next/link";
import styles from "../styles/home.module.css";
const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <Link href="/" passHref>
        Firebatu
      </Link>
    </nav>
  );
};

export default Nav;
