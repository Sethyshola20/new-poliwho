"use client";

import React, { useState, useEffect, Suspense } from "react";
import Representatives from "./components/representatives";

function App() {
  const [representatives, setRepresentatives] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchRepresentative = async () => {
    const res = await fetch("https://www.nosdeputes.fr/deputes/json");
    const data = await res.json();

    if (data.deputes) {
      setRepresentatives(data.deputes);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepresentative();
  }, []);
  return (
    <>
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
      {loading ? (
        <div>loading...</div>
      ) : (
        <h1>Les députés de la 15e législature:</h1>
      )}
      <Suspense fallback={<div>loading...</div>}>
        <Representatives representatives={representatives} search={search} />
      </Suspense>
    </>
  );
}

export default App;
