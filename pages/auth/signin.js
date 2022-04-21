import { useState } from "react";
import { useAuth } from "../../context/authcontext";
import { useRouter } from "next/router";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sign-in">
      <h1>Login into your account.</h1>
      <form onSubmit={handleSignin}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={({ target: { value } }) => setUsername(value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <br />
        <button>Sign me in</button>
      </form>
    </div>
  );
};

export default Signin;
