import Ads from "../components/Ads";
import Filter from "../components/Filter";
import Search from "../components/Search";

function Home() {
  return (
    <section className="section--home">
      <Filter />
      <div className="u-flex-column">
        <Search />
        <Ads />
      </div>
    </section>
  );
}

export default Home;
