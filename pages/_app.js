import "../src/app/globals.css"; // Global Tailwind CSS or other styles
// import "@fontsource/inter/400.css"; // Regular weight
// import "@fontsource/inter/600.css"; // Semi-bold

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
