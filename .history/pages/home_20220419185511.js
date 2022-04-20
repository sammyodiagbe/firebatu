import Head from "next/head";
import { authContext } from "../context/authcontext";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import _ from "lodash";
import Logout from "../components/logout";
import Link from "next/link";

const Home = () => {
  const { user } = useContext(authContext);
  const router = useRouter();
  useEffect(() => {
    // if (_.isEmpty(user)) {
    //   router.push("/auth/signin");
    // }
  }, []);
  const linkLikebuttonStyle = {
    padding: "10px",
    borderRadius: "8px",
    outline: "none",
    border: "none",
    background: "hsl(275,80%,78%)",
  };
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
          <div className="games">
            <div>
              <h2>Flipper</h2>
              <button
                style={linkLikebuttonStyle}
                onClick={() => {
                  router.push("/game/batuground?game=flipper");
                }}
              >
                Play flipper
              </button>
            </div>
            <div>
              <h2>Spellbatu</h2>
              <button
                style={linkLikebuttonStyle}
                onClick={() => {
                  router.push("/game/batuground?game=spellbatu");
                }}
              >
                Play Spellbatu
              </button>
            </div>
            <div>
              <h2>Builder</h2>
              <button
                onClick={() => {
                  router.push("/game/batuground?game=spellbatu");
                }}
              >
                Play Builder
              </button>
            </div>
          </div>
        </main>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
};

export default Home;
