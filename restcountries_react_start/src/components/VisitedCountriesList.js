import CountryListItem from "./CountryListItem";

const VisitedCountriesList = ({visitedCountries}) => {
    return(
        <>
            <h2>All the countries I've visited!</h2>
            {visitedCountries ? 
                visitedCountries.map((country, index) => <CountryListItem country={country.name} key={country+index} />) :
                <p>Loading...</p>
            }
        </>
    );
}

export default VisitedCountriesList;