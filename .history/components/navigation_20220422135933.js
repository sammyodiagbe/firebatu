import Link from "next/link";
import styles from "../styles/Home.module.css";
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
