import React, { useState, useEffect } from "react";
import axios from "axios";

import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles

function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://type.fit/api/quotes");
      const randomIndex = Math.floor(Math.random() * response.data.length);
      const randomQuote = response.data[randomIndex];
      setQuote(randomQuote);
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefreshClick = () => {
    fetchQuote();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-md p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">
          Random Quote App
        </h1>
        <div className="quote-box bg-gray-100 p-4 rounded-md shadow-md">
          {loading ? (
            <p className="text-center text-gray-600 italic">Loading...</p>
          ) : (
            <blockquote className="text-lg text-gray-800">
              <p className="mb-2 italic">{quote.text}</p>
              <footer className="text-sm text-gray-600">
                {quote.author ? quote.author.split(",")[0] : "Unknown"}
              </footer>
            </blockquote>
          )}
        </div>
        <button
          className={`bg-purple-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-purple-700 ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleRefreshClick}
          disabled={loading}
        >
          {loading ? "Getting Quote..." : "Get Another Quote"}
        </button>
      </div>
    </div>
  );
}

export default App;
