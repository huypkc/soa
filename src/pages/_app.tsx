import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config";
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
      />
      <Component {...pageProps} />
    </>
  );
}
export default appWithTranslation(App, nextI18NextConfig);
