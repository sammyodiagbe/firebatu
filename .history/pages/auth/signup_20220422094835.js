import { useState } from "react";
import { useAuth } from "../../context/authcontext";
import { useRouter } from "next/router";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { createAccount } = useAuth();
  const router = useRouter();

  const handleAccountCreation = async (event) => {
    event.preventDefault();
    try {
      await createAccount(username, password);
      console.log("account creation successful");
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sign-up">
      <h1>Create your account.</h1>
      <form onSubmit={handleAccountCreation}>
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

export default Signup;
