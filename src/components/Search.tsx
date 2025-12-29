import { Search as SearchEmoji } from "react-ionicons";

function Search() {
  return (
    <>
      <SearchEmoji className="search-emoji" />
      <input className="search" type="text" placeholder="Search ads..."></input>
    </>
  );
}

export default Search;
