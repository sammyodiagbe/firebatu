import Link from "next/link";
const Nav = () => {
  return (
    <nav className={"nav"}>
      <Link href="/" passHref>
        <h3>Firebatu</h3>
      </Link>

      <div>
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
