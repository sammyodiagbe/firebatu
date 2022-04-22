import Link from "next/link";
import "../styles/Home.module.css";
const Nav = () => {
  return (
    <nav className={"nav"}>
      <Link href="/" passHref>
        <h3>Firebatu</h3>
      </Link>
      <div style="side-navigation">
        <Link href="/auth/signin" passHref>
          Login
        </Link>
        <Link href="/auth/signup" passHref>
          Create account
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
