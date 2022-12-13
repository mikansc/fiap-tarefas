import { useAuth } from "contexts/authContext";

import { Home, Login } from "containers";

export default function Homepage() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Home /> : <Login />;
}
