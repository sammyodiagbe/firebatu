import Link from "next/link";
const Nav = () => {
  return (
    <nav className={"nav"}>
      <Link href="/" passHref>
        <h3>Firebatu</h3>
      </Link>

      <Link href="/auth/signin" passHref>
        Login
      </Link>
      <Link href="/auth/signup" passHref>
        Create account
      </Link>
    </nav>
  );
};

export default Nav;
