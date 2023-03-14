import React from "react";
import Head from "next/head";
import AboutBen from "@/src/components/about/AboutBen";

export default function about() {
  return (
    <>
      <Head>
        <title>About - The Project Guy</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Tell us about your business to get started with us...'
        />
      </Head>
      <AboutBen />
    </>
  );
}
