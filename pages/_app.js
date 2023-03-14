import "@/styles/globals.css";
import Navbar from "@/src/components/navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
