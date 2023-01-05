import { AuthContextProvider } from "contexts/authContext";
import type { AppProps } from "next/app";

import "../styles/app.scss";

import "react-toastify/dist/ReactToastify.css";
import "../styles/toasts.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
