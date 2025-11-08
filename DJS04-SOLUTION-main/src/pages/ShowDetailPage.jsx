import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

/**
 * ShowDetailPage Component
 * 
 * Fetches and displays details for a specific podcast show
 * based on the route parameter (id). Handles loading, error,
 * and empty states for a smooth user experience.
 */
export default function ShowDetailPage() {
  const { id } = useParams(); // Get the dynamic show ID from the route
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchShowDetails() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();

        if (!data || Object.keys(data).length === 0) {
          throw new Error("Show not found.");
        }

        setShow(data);
      } catch (err) {
        console.error("Error fetching show details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchShowDetails();
  }, [id]);

  // 🌀 Loading State
  if (loading) {
    return (
      <div className="show-detail loading">
        <p>Loading show details...</p>
      </div>
    );
  }

  // ⚠️ Error State
  if (error) {
    return (
      <div className="show-detail error">
        <p>Something went wrong: {error}</p>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  // 🚫 Empty State
  if (!show) {
    return (
      <div className="show-detail empty">
        <p>No show details available.</p>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  // ✅ Success State
  return (
    <div className="show-detail">
      <Link to="/">← Back to Home</Link>
      <h1>{show.title}</h1>
      <img src={show.image} alt={show.title} width="300" />
      <p>{show.description}</p>

      {show.genres && (
        <p>
          <strong>Genres:</strong> {show.genres.join(", ")}
        </p>
      )}

      {show.seasons && (
        <p>
          <strong>Seasons:</strong> {show.seasons.length}
        </p>
      )}
    </div>
  );
}
