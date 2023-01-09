import { AuthContextProvider } from "contexts/authContext";
import type { AppProps } from "next/app";

import "../styles/app.scss";

import "react-toastify/dist/ReactToastify.css";
import "../styles/toasts.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
      <ToastContainer position={"bottom-center"} theme="colored" pauseOnHover={false} />
    </AuthContextProvider>
  );
}
