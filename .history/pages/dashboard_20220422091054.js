import Logout from "../components/logout";
import styles from "../styles/Home.module.css";
import ProtectedRoute from "../components/protectedRoute";
import { useAuth } from "../context/authcontext";
import Link from "next/link";
import { useEffect } from "react";
import { useRoomContext } from "../context/roomContext";

const Dashboard = () => {
  const { user } = useAuth();
  const { joinRoom } = useRoomContext();

  useEffect(() => {}, []);
  return (
    <ProtectedRoute>
      <div className="dashboard">
        <h1>Hello, {user ? user.displayName : "player"}</h1>
        <h1>User dashboard</h1>
        <div>
          <h1>Choose a batu ground</h1>
          <div>
            <Link href="/game/batuground?room=flipper" passHref>
              Flipper
            </Link>
          </div>
        </div>
        <Logout />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
