import { Footer, Header } from "./Blocks";
import {
  About,
  Contact,
  Hero,
  Intrested,
  Portfolio,
  Services,
} from "./Components";

const App = () => {
  return (
    <div>
      <Header />
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
