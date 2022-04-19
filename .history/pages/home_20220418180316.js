import Head from "next/head";
import { authContext } from "../context/authcontext";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import _ from "lodash";

const Home = () => {
  const { user } = useContext(authContext);
  const router = useRouter();
  useEffect(() => {
    console.log(user);
    if (_.isEmpty(user)) {
      router.push("/auth/signin");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1>Welcome home lol</h1>
      </main>
    </>
  );
};

export default Home;
