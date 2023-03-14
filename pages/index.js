import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/src/components/home/hero/Hero";
import Services from "@/src/components/home/services/Services";
import About from "@/src/components/home/about/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - The Project Guy</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Tell us about your business to get started with us...'
        />
      </Head>
      <Hero />
      <Services />
      <About />
    </>
  );
}
