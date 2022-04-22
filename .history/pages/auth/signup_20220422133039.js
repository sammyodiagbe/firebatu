import { useState } from "react";
import { useAuth } from "../../context/authcontext";
import { useRouter } from "next/router";
import { updateProfile } from "firebase/auth";
import Image from "next/image";
import AvatarSelection from "../../components/avatar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, updateAvatarSelection] = useState("avatar-0");
  const { createAccount } = useAuth();
  const router = useRouter();
  const avatarList = [
    "/p1.svg",
    "/p2.svg",
    "/p3.svg",
    "/p4.svg",
    "/p5.svg",
    "/p6.svg",
    "/p7.svg",
    "/p8.svg",
    "/p9.svg",
  ];

  const renderAvatarChoice = avatarList.map((av, index) => {
    return (
      <AvatarSelection
        key={index}
        id={`avatar-${index}`}
        src={av}
        updateAvatarSelection={updateAvatarSelection}
        avatarSelection={avatar}
      />
    );
  });

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
        {renderAvatarChoice}

        <button>Sign me up</button>
      </form>
    </div>
  );
};

export default Signup;
