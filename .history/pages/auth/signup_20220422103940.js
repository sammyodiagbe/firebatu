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
        <h3>Choose gender</h3>
        <Image
          src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          alt="female avatar"
          width={80}
          height={80}
        />
        <button>Sign me up</button>
      </form>
    </div>
  );
};

export default Signup;
