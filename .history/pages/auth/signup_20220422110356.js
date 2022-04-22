import { useState } from "react";
import { useAuth } from "../../context/authcontext";
import { useRouter } from "next/router";
import { updateProfile } from "firebase/auth";
import Image from "next/image";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { createAccount } = useAuth();
  const router = useRouter();

  const handleAccountCreation = async (event) => {
    event.preventDefault();
    try {
      const { user } = await createAccount(email, password, username);
      console.log(user);
      await updateProfile(user, {
        displayName: username,
      });
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
          type="email"
          placeholder="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <br />
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
        <h3>Choose your avatar.</h3>
        <label htmlFor="image-1">
          <Image src="/p1.svg" alt="female avatar" width={80} height={80} />
          <input type="radio" name="image-1" id="image-1" />
        </label>
        <label htmlFor="image-2">
          <Image src="/p2.svg" alt="female avatar" width={80} height={80} />
          <input type="checkbox" name="image-2" id="image-2" />
        </label>

        <Image src="/p3.svg" alt="female avatar" width={80} height={80} />
        <Image src="/p4.svg" alt="female avatar" width={80} height={80} />
        <Image src="/p5.svg" alt="female avatar" width={80} height={80} />
        <Image src="/p6.svg" alt="female avatar" width={80} height={80} />
        <Image src="/p7.svg" alt="female avatar" width={80} height={80} />
        <Image src="/p6.svg" alt="female avatar" width={80} height={80} />
        <Image src="/p9.svg" alt="female avatar" width={80} height={80} />

        <button>Sign me up</button>
      </form>
    </div>
  );
};

export default Signup;
