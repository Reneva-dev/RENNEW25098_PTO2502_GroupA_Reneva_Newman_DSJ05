// src/pages/HomePage.jsx
import React, { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext.jsx";
import { genres } from "../data";
import SearchBar from "../components/SearchBar.jsx";
import GenreFilter from "../components/GenreFilter.jsx";
import SortSelect from "../components/SortSelect.jsx";
import PodcastGrid from "../components/PodcastGrid.jsx";

export default function HomePage() {
  const { podcasts, filteredPodcasts } = useContext(PodcastContext);

  return (
    <div className="homepage">
      <h1>Podcasts</h1>
      <SearchBar />
      <GenreFilter genres={genres} />
      <SortSelect />
      <PodcastGrid podcasts={filteredPodcasts || podcasts} genres={genres} />
    </div>
  );
}
