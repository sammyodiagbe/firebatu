import Logout from "../components/logout";
import ProtectedRoute from "../components/protectedRoute";
import { useAuth } from "../context/authcontext";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <ProtectedRoute>
      <div className="dashboard">
        <h1>User dashboard</h1>
        <Logout />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
