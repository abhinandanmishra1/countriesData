import Card from "./Card";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
	const [search, setSearch] = useState("");
	const [country, setCountry] = useState([]);
	const [count, setCount] = useState(0);

	// https://restcountries.com/v3.1/name/{name}
	const setCountriesData = async (e) => {
		try {
			if (search === "") {
				const response = await axios.get("https://restcountries.com/v2/all");
				setCountry(response.data.slice(0, 105));
			} else {
				const data = await axios.get(
					`https://restcountries.com/v3.1/name/${search}`
				);
				setCountry(data.data);
			}
		} catch (err) {
			console.log(err.message);
		}
	};
	useEffect(() => {
		setCountriesData();
	}, [search]);
	return (
		<div className="App">
			<div className="searchBar">
				<input
					type="text"
					className="search"
					placeholder="Search for a country"
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			<div className="Main">
				{country.map((country) => {
					return <Card country={country} />;
				})}
			</div>
		</div>
	);
}

export default App;
