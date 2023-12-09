import "../styles/globals.css";
import Header from "../components/Header";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
