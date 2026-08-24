import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Constraints from "../../components/Constraints/Constraints";
import Results from "../../components/Results/Results";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Constraints />
        <Results />
      </main>

      <Footer variant="gray" />
    </>
  );
}

export default Home;
