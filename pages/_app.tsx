import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Toaster />
    <Component {...pageProps} />
  </RecoilRoot>
);

export default App;
