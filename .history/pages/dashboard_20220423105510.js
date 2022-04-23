import Logout from "../components/logout";
import styles from "../styles/Home.module.css";
import ProtectedRoute from "../components/protectedRoute";
import { useAuth } from "../context/authcontext";
import Link from "next/link";
import { useEffect } from "react";
import { useRoomContext } from "../context/roomContext";
import Game from "../components/game";

const Dashboard = () => {
  const { user } = useAuth();

  useEffect(() => {}, []);
  return (
    <ProtectedRoute>
      <div className="dashboard">
        <div>
          <h1>Choose a batu ground</h1>
          <div>
            <Game gameName={"flipper"} />
            <Game gameName={"Tictactoe"} />
            <Game gameName={"Castle"} />
          </div>
        </div>
        <Logout />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
