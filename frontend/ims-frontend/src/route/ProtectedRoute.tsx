import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    children: React.ReactElement
}

// Helper function to check if the user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
  // Add further logic here to verify the token (like decoding it or checking expiration)
  return !!token; // Return true if token exists, false otherwise
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // If user is not authenticated, redirect to login
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the protected page (Dashboard in this case)
  return children;
};

export default ProtectedRoute;
