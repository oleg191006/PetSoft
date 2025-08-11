"use client";

import { createContext, useState } from "react";

type SearchContextProvider = {
  children: React.ReactNode;
};

type TSearchContext = {
  searchText: string;
  handleChangeSearchText: (newValue: string) => void;
};

export const SearchContext = createContext<TSearchContext | null>(null);

export default function SearchContextProvider({
  children,
}: SearchContextProvider) {
  const [searchText, setSearchText] = useState("");

  const handleChangeSearchText = (newValue: string) => {
    setSearchText(newValue);
  };

  return (
    <SearchContext.Provider value={{ searchText, handleChangeSearchText }}>
      {children}
    </SearchContext.Provider>
  );
}
