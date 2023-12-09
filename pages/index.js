import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Homepage from "../components/Homepage";
import Works from "../components/Works";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";

export default function Home() {
  return (
    <div>
      <Homepage />
      <Works />
      <Services />
      <Contactform />
      <Footer />
    </div>
  );
}
