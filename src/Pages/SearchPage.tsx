import { useSearchRestaurants } from "@/api/RestaurantApi";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultInfo from "@/components/SearchResultInfo";
import SearchResultsCard from "@/components/SearchResultsCard";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
};

function SearchPage() {
  const { city } = useParams();
 
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
  });
  const { results, isLoading } = useSearchRestaurants(searchState, city);
  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
    }));
  };
  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
    }));
  };
  if (isLoading) {
    <span>Loading ...</span>;
  }
  if (!results?.data) {
    return <span> No results Found</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">Insert cuisines here</div>
      <div id="main-content" className="flex flex-col gap-5 ">
        <SearchBar
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          placeHolder="search by cuisine or restaurant name"
          onReset={resetSearch}
        />
        <SearchResultInfo total={results.pagination.total} city={city} />
        {results.data.map((restaurant) => (
          <SearchResultsCard restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
