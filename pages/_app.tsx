import { AuthContextProvider } from "contexts/authContext";
import type { AppProps } from "next/app";
import "../styles/app.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
