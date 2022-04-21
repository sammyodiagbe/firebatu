import { auth } from "../config/firebase.config";
import { signOut } from "firebase/auth";
import { useRouter, withRouter } from "next/router";
import { useAuth } from "../context/authcontext";

const Logout = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const logUserOut = async () => {
    try {
      await logout();
      router.push("/auth/signin");
    } catch (err) {
      console.log("Something went wrong");
      console.log(err);
    }
  };
  return (
    <button
      style={{ padding: "10px", borderRadius: "10px" }}
      onClick={logUserOut}
    >
      logout
    </button>
  );
};

export default withRouter(Logout);
