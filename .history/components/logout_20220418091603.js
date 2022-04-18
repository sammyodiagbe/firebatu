import { auth } from "../config/firebase.config";
import { signOut } from "firebase/auth";

const Logout = () => {
  const logout = async () => {
    try {
      const signout = await signOut(auth);
      console.log(auth.currentUser);
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
