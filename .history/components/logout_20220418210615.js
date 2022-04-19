import { auth } from "../config/firebase.config";
import { signOut } from "firebase/auth";
import Router from "next/router";

const Logout = () => {
  const router = Router();
  const logout = async () => {
    try {
      const signout = await signOut(auth);
      router.push("/auth/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button style={{ padding: "10px", borderRadius: "10px" }} onClick={logout}>
      logout
    </button>
  );
};

export default Logout;