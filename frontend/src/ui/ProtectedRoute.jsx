import useAuthorize from "../features/authentication/useAuthorize";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorize();
  
  return children;
}

export default ProtectedRoute;
