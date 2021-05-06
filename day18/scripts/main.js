const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the countries API using fetch and print the name of country, capital, languages, population and area.
/* const details = []
async function fetchCountries() {
	const response = await fetch(countriesAPI)
	const data = await response.json()
	for (i = 0; i < data.length; i++) {
		details.push([data[i].name, data[i].capital, data[i].languages, data[i].population, data[i].area])
	}
}
fetchCountries()
console.log(details) */

// Print out all the cat names into catNames variable.
/* const catNames = []
async function fetchCats() {
	const response = await fetch(catsAPI)
	const data = await response.json()
	for (i = 0; i < data.length; i++) {
		catNames.push(data[i].name)
	}
}
fetchCats()
console.log(catNames) */

// Read the cats api and find the average weight of cat in metric unit.
/* async function fetchCats() {
	const response = await fetch(catsAPI)
	const data = await response.json()
	const catWeights = []
	for (i = 0; i < data.length; i++) {
		catWeights.push(data[i].weight.metric)
	}
	let catWeightsSum = 0
	let pattern = /\d/
	for (i = 0; i < catWeights.length; i++) {
		for (n = 0; n < catWeights[i].length; n++) {
			if (pattern.test(catWeights[i][n]) === true) {
				catWeightsSum += parseInt(catWeights[i][n])
			}
		}
	}
	let catWeightsAverage = catWeightsSum / 2 / catWeights.length
	console.log(catWeightsAverage)
}
fetchCats() */

// Read the countries api and find out the 10 largest countries.
/* async function largestCountries() {
	const response = await fetch(countriesAPI)
	const data = await response.json()
	data.sort((a, b) => {
		return b.area - a.area;
	});
	console.log(data.slice(0, 10))
}
largestCountries() */

// Read the countries api and count total number of languages in the world used as officials.
async function totalLanguages() {
	const response = await fetch(countriesAPI)
	const data = await response.json()
	console.log(data)
	const allLanguages = []
	for (i = 0; i < data.length; i++) {
		for (n = 0; n < data[i].languages.length; n++) {
			allLanguages.push(data[i].languages[n].name)
		}
	}
	console.log(allLanguages)
	const uniqueLanguages = []
	for (i = 0; i < allLanguages.length; i++) {
		if (uniqueLanguages.includes(allLanguages[i]) === false) {
			uniqueLanguages.push(allLanguages[i])
		}
	}
	console.log(uniqueLanguages)
}
totalLanguages()