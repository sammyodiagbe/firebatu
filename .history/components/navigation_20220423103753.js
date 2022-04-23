import Link from "next/link";
import { useAuth } from "../context/authcontext";
const Nav = () => {
  const { user } = useAuth();
  return (
    <nav className={"nav"}>
      <Link href="/" passHref>
        <h3>Firebatu</h3>
      </Link>

      <div>
        {user ? (
          <h4>hi, {user.displayName}</h4>
        ) : (
          <>
            <Link href="/auth/signin" passHref>
              Login
            </Link>
            <Link href="/auth/signup" passHref>
              Create account
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
