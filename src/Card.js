import React from "react";
import { useState, useEffect } from "react";
import "./card.css";
const Card = ({ country }) => {
	const [currencyName, setCurrencyName] = useState("");
	const [currencySymbol, setCurrencySymbol] = useState("");
	const [languageName, setLanguageName] = useState("");
	const [languageSymbol, setLanguageSymbol] = useState("");
	const [population, setPopulation] = useState("");
	const [area, setArea] = useState("");
	useEffect(() => {
		try {
			const data = country.currencies;

			if (country.currencies.length > 0) {
				setCurrencyName(data[0].name);
				setCurrencySymbol(data[0].symbol);
			} else {
				const values = Object.values(country.currencies)[0];
				setCurrencyName(values.name);
				setCurrencySymbol(values.symbol);
			}
		} catch (err) {
			console.log(
				"This is error message (While fetching currency ):",
				err.message
			);
		}
		try {
			const data = country.languages;
			if (country.languages.length > 0) {
				setLanguageName(data[0].name);
				setLanguageSymbol(data[0].iso639_1);
			} else {
				const key = Object.keys(country.languages)[0];

				setLanguageName(country.languages[key]);
				setLanguageSymbol(key);
			}
		} catch (err) {
			console.log(
				"This is error message (While fetching Language):",
				err.message
			);
		}
		setPopulation(country.population);
		setArea(country.area);
	}, [country]);

	return (
		<div class="card">
			<div class="header-image">
				<img src={country.flags.png} alt="haha" />
			</div>
			<div class="card-details">
				<div class="card-detail-1">
					<h1 class="name">{country.name.common || country.name}</h1>
					<h3 class="continent">{country.region}</h3>
				</div>
				<div class="card-detail-2">
					<div class="currency">
						<span class="currency-symbol">{currencySymbol}</span>
						<span class="currency-name">{currencyName}</span>
					</div>
					<div class="language">
						<span class="language-symbol">{languageSymbol}</span>
						<span class="language-name">{languageName}</span>
					</div>
				</div>
				<div class="card-detail-3">
					<div class="population">{population}</div>
					<div class="area">{area} sq. km</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
