import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import "./globals.css";
import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="./global.css" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/761b4a6616.js"
          crossOrigin="anonymous"
        ></script>
        <meta property="og:title" content="Sanctuary Sound" />
        <meta
          property="og:description"
          content="Discover more about Sanctuary Sound"
        />
        <meta property="og:image" content="/favicon.ico" />
        <title>Sanctuary Sound</title>
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
