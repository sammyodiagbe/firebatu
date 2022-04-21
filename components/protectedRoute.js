import { useEffect } from "react";
import { useAuth } from "../context/authcontext";
import { useRouter } from "next/router";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push("/auth/signin");
  }, [router, user]);
  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
