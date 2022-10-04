import CountryListItem from "./CountryListItem";

const VisitedCountriesList = ({visitedCountries}) => {
    return(
        <>
            <h2>All the countries I've visited!</h2>
            <ul className="visited-countries-list">
            {visitedCountries ? 
                visitedCountries.map((country, index) => <CountryListItem country={country} key={country+index} />) :
                <p>Loading...</p>
            }
            </ul>
        </>
    );
}

export default VisitedCountriesList;