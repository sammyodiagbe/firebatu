import Link from "next/link";
import styles from "../styles/Home.module.css";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" passHref>
        Firebatu
      </Link>
      <div style={styles.sideNavigation}>
        <Link href="/auth/signin">Login</Link>
        <Link href="/auth/signup">Create account</Link>
      </div>
    </nav>
  );
};

export default Nav;
