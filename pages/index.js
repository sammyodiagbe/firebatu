import Head from "next/head";
import Link from "next/link";

// const activeUser = auth.currentUser;
// console.log(activeUser);

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome to firebatu</title>
      </Head>
      <div>
        <h1>Firebatu</h1>
        <div>
          <Link href={"/auth/signin"} passHref>
            Login
          </Link>
        </div>
        <div>
          <Link href={"/auth/signup"} passHref>
            Create account
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
