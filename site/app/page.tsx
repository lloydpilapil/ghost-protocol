import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Agents from "./components/Agents";
import Threads from "./components/Threads";
import Routing from "./components/Routing";
import CoreFour from "./components/CoreFour";
import Comparison from "./components/Comparison";
import Install from "./components/Install";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problems />
      <Agents />
      <Threads />
      <Routing />
      <CoreFour />
      <Comparison />
      <Install />
      <Footer />
    </>
  );
}
