import Ads from "../components/Ads";
import Filter from "../components/Filter";
import Search from "../components/Search";

function Home() {
  return (
    <section className="section--home">
      <Filter />
      <Search />
      <Ads />
    </section>
  );
}

export default Home;
