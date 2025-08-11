"use client";
import useSearchContext from "@/shared/hooks/use-search-context";

const SearchForm = () => {
  const { searchText, handleChangeSearchText } = useSearchContext();
  return (
    <form className="w-full h-full bg-white/20">
      <input
        type="search"
        className="w-full h-full bg-white/20 rounded-md px-5 outline-none transition focus:bg-white/50 hover:bg-white/30 placeholder:text-white/50"
        placeholder="Search pets"
        value={searchText}
        onChange={(e) => handleChangeSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
