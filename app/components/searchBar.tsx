"use client";

import { useStore } from "@/store";

export default function SearchBar() {
  const setSearch = useStore((state) => state.setSearch);
  return (
    <div className="form">
      <form>
        <input
          className="search_input"
          type="text"
          placeholder="Nom, parti, departement..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </form>
    </div>
  );
}
