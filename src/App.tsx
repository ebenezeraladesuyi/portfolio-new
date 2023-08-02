import { Header } from "./Blocks";
import { About, Hero, Portfolio, Services } from "./Components";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
};

export default App;
