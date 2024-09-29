import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Hero from "./Components/hero";
import Data from "./Components/Data";

function App() {
  const cards = Data.map((el) => {
    return (
      <Card
        key={el.id}
        {...el}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </>
  );
}

export default App;
