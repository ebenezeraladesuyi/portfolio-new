import { Footer, Header } from "./Blocks";
import {
  About,
  Contact,
  Hero,
  Intrested,
  Portfolio,
  Services,
} from "./Components";
import { Circle } from "./common";

const App = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <Header />
      <Hero />
      <Circle />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Intrested />
      <Footer />
    </div>
  );
};

export default App;
