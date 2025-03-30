import { HiOutlineDocumentText } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white px-4 py-3 shadow-md flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      <h1 className="text-xl sm:text-2xl font-bold tracking-wide flex items-center gap-2">
        <HiOutlineDocumentText className="w-5 h-5" />
        Invoice system
      </h1>

      {isAuthenticated && user && (
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <h3 className="text-base sm:text-lg font-medium flex items-center gap-2">
            <FaUser className="w-4 h-4" />
            {user.given_name || user.email}
          </h3>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded text-sm transition w-full sm:w-auto"
          >
            Cerrar Sesión
          </button>
        </div>
      )}
    </header>
  );
}
