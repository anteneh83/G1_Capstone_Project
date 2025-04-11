import { useState } from "react";

const suggestions = [
  "Paris, France",
  "Rome, Italy",
  "Kyoto, Japan",
  "Addis Ababa, Ethiopia",
  "Cape Town, South Africa",
  "Beach Vacations",
  "Mountain Adventures",
  "Cultural Experiences",
  "Affordable Getaways",
  "Road Trips",
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);
    if (input.length > 0) {
      const filtered = suggestions.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowDropdown(true);
    } else {
      setFilteredSuggestions([]);
      setShowDropdown(false);
    }
  };

  const handleSelect = (suggestion) => {
    setQuery(suggestion);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-8">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => query && setShowDropdown(true)}
        placeholder="Search destinations or travel types..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {showDropdown && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg max-h-60 overflow-y-auto">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelect(suggestion)}
                className="px-4 py-2 cursor-pointer hover:bg-blue-100"
              >
                {suggestion}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
