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
      <main className="dashboard">
        <div>
          <h1 className="title">Choose a batu ground</h1>
          <div className="games">
            <Game
              gameName={"flipper"}
              description="some sort of description goes in here"
            />
            <Game
              gameName={"Tictactoe"}
              description="Some sort of description also goes in here"
            />
            <Game
              gameName={"Castle"}
              description="This is sort of like the description of each game"
            />
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
};

export default Dashboard;
