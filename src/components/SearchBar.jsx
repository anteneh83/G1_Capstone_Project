// components/SearchBar.jsx
import React, { useState } from "react";

const suggestionsList = [
  "Bali",
  "Dubai",
  "Paris",
  "Italy",
  "Japan",
  "New York",
  "London",
  "Sydney",
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);
    if (input.length > 0) {
      const matches = suggestionsList.filter((s) =>
        s.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredSuggestions(matches);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-48">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-full py-1 px-4 w-full text-black"
        value={query}
        onChange={handleChange}
        onFocus={() => query && setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      />
      {showDropdown && (
        <ul className="absolute z-50 bg-white border rounded mt-1 w-full text-sm shadow">
          {filteredSuggestions.length ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-400">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
