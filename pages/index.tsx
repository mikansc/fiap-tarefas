import { useAuth } from "contexts/authContext";

import { Home, Login } from "containers";
import { TasksContextProvider } from "contexts/tasksContext";

import { ToastContainer } from "react-toastify";

export default function Homepage() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <TasksContextProvider>
          <Home />
        </TasksContextProvider>
      ) : (
        <Login />
      )}
    </>
  );
}
