import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="title"
          content="Galaxy Adventures — Take your travels to new heights"
        />
        <meta
          name="description"
          content="Galaxy Adventures is a pioneering space tourism company that is dedicated to offering unforgettable experiences in space. Our mission is to make space accessible to everyone and provide a platform for people to explore the cosmos like never before. With our team of experienced astronauts, engineers, and space enthusiasts, we are committed to providing safe, comfortable, and memorable space missions that push the boundaries of what is possible. Whether you're looking to experience weightlessness, see the Earth from a unique perspective, or be among the first to witness the wonders of space, Galaxy Adventures is your ticket to a once-in-a-lifetime adventure. Join us as we embark on the ultimate journey to the stars."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://galaxyadventures.vercel.app/"
        />
        <meta
          property="og:title"
          content="Galaxy Adventures — Take your travels to new heights"
        />
        <meta
          property="og:description"
          content="Galaxy Adventures is a pioneering space tourism company that is dedicated to offering unforgettable experiences in space. Our mission is to make space accessible to everyone and provide a platform for people to explore the cosmos like never before. With our team of experienced astronauts, engineers, and space enthusiasts, we are committed to providing safe, comfortable, and memorable space missions that push the boundaries of what is possible. Whether you're looking to experience weightlessness, see the Earth from a unique perspective, or be among the first to witness the wonders of space, Galaxy Adventures is your ticket to a once-in-a-lifetime adventure. Join us as we embark on the ultimate journey to the stars."
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://galaxyadventures.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Galaxy Adventures — Take your travels to new heights"
        />
        <meta
          property="twitter:description"
          content="Galaxy Adventures is a pioneering space tourism company that is dedicated to offering unforgettable experiences in space. Our mission is to make space accessible to everyone and provide a platform for people to explore the cosmos like never before. With our team of experienced astronauts, engineers, and space enthusiasts, we are committed to providing safe, comfortable, and memorable space missions that push the boundaries of what is possible. Whether you're looking to experience weightlessness, see the Earth from a unique perspective, or be among the first to witness the wonders of space, Galaxy Adventures is your ticket to a once-in-a-lifetime adventure. Join us as we embark on the ultimate journey to the stars."
        />

        <meta property="twitter:image" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Jost:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://unpkg.com/pattern.css" rel="stylesheet"></link>
      </Head>
      <body className="m-auto max-w-[2500px]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
