import { Navigate } from "react-router";
const ProctedRoute = ({ isSignedIn, children }) => {
  return isSignedIn ? children : <Navigate to="/" />;
};
export default ProctedRoute;
