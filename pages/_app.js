import "../styles/globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Galaxy Adventures</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
