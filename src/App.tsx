import { Footer, Header } from "./Blocks";
import {
  About,
  Contact,
  Hero,
  Intrested,
  Portfolio,
  Services,
} from "./Components";
import Circle from "./common/Circle";

const App = () => {
  return (
    <div>
      <Header />
      <Circle />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Intrested />
      <Footer />
    </div>
  );
};

export default App;
