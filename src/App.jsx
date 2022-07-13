import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  RefinementList,
  Pagination,
  Configure
} from "react-instantsearch-hooks-web";
const searchClient = algoliasearch(
  "FU4SCU6OPV",
  "c7a8e267e004300e496f4a56d9498f82"
);
import "./styles.css";

function Hit({ hit }) {
  return (
    <article className="hit-article">
      <div className="hit-img">
        <img src={hit.image} alt={hit.name} />
      </div>

      <div className="hit-content">
        <p className="hit-categories">{hit.categories[0]}</p>
        <h1>{hit.name}</h1>
        <p className="hit-price">${hit.price}</p>
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <div className="navbar">
        <h1>E-COMMERCE</h1>
      </div>
      <InstantSearch searchClient={searchClient} indexName="UI DEMO">
        <Configure hitsPerPage={5} />
        <div className="brand">
          <SearchBox className="searchbox" />
        </div>
        <RefinementList attribute="brand" />

        <Hits className="grid" hitComponent={Hit} />

        <Pagination className="pagination" />
      </InstantSearch>
    </>
  );
}
export default App;
