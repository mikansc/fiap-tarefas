import { AuthContextProvider } from "contexts/authContext";
import { TasksContextProvider } from "contexts/tasksContext";
import type { AppProps } from "next/app";
import "../styles/app.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <TasksContextProvider>
        <Component {...pageProps} />
      </TasksContextProvider>
    </AuthContextProvider>
  );
}
