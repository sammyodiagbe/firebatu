import Head from "next/head";
import { authContext } from "../context/authcontext";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import _ from "lodash";
import Logout from "../components/logout";

const Home = () => {
  const { user } = useContext(authContext);
  const router = useRouter();
  useEffect(() => {
    console.log(user);
    if (_.isEmpty(user)) {
      //   router.push("/auth/signin");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {!_.isEmpty(user) ? (
        <main>
          {!_.isEmpty(user) ? <p>Authenticated</p> : <p>unauthorized</p>}
          <h1>
            Welcome home lol <Logout />
          </h1>
        </main>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
};

export default Home;
