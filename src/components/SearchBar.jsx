// components/SearchBar.jsx
import React, { useState } from 'react'
import { IoIosSearch, IoMdClose } from 'react-icons/io'

const suggestionsList = [
	'Bali',
	'Dubai',
	'Paris',
	'Italy',
	'Japan',
	'New York',
	'London',
	'Sydney',
]

const SearchBar = () => {
	const [query, setQuery] = useState('')
	const [filteredSuggestions, setFilteredSuggestions] = useState([])
	const [showDropdown, setShowDropdown] = useState(false)

	const handleChange = (e) => {
		const input = e.target.value
		setQuery(input)
		if (input.length > 0) {
			const matches = suggestionsList.filter((s) =>
				s.toLowerCase().includes(input.toLowerCase())
			)
			setFilteredSuggestions(matches)
			setShowDropdown(true)
		} else {
			setShowDropdown(false)
		}
	}

	const handleSuggestionClick = (suggestion) => {
		setQuery(suggestion)
		setShowDropdown(false)
	}

	const [showDesktopSearch, setShowDesktopSearch] = useState(false)

	return (
		<div className="relative px-0">
			{!showDesktopSearch ? (
				<IoIosSearch
					onClick={() => setShowDesktopSearch(true)}
					className="size-5 text-gray-100 cursor-pointer hover:text-white"
				/>
			) : (
				<form className="flex items-center bg-white rounded py-1 px-1">
					<input
						type="text"
						value={query}
						onChange={handleChange}
						onFocus={() => query && setShowDropdown(true)}
						onBlur={() =>
							setTimeout(() => setShowDropdown(false), 200)
						}
						className="text-gray-900 w-full py-1 text-xs bg-transparent focus:outline-none"
						placeholder="Search..."
					/>
					<button type="submit">
						<IoIosSearch className="size-4 text-gray-600 cursor-pointer ml-1" />
					</button>
					<IoMdClose
						onClick={() => setShowDesktopSearch(false)}
						className="size-4 text-gray-600 cursor-pointer ml-1"
					/>
				</form>
			)}

			{showDropdown && (
				<ul className="absolute -left-4 top-9 z-50 bg-white border rounded mt-1 w-full text-sm shadow">
					{filteredSuggestions.length ? (
						filteredSuggestions.map((suggestion, index) => (
							<li
								key={index}
								className="px-4 py-2 cursor-pointer hover:bg-gray-100"
								onClick={() =>
									handleSuggestionClick(suggestion)
								}
							>
								{suggestion}
							</li>
						))
					) : (
						<li className="px-4 py-2 text-gray-400">
							No results found
						</li>
					)}
				</ul>
			)}
		</div>
	)
}

export default SearchBar
