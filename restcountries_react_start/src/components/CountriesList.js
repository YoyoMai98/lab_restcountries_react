import CountryListItem from "./CountryListItem";

const CountriesList = ({countries}) => {
    return(
        <>
            <h2>CountriesList here!</h2>
            <ul className="countries-list">
            {countries ? 
                countries.map((country, index) => <CountryListItem country={country} key={country+index} />) :
                <p>Loading...</p>
            }
            </ul>
        </>
    );
}

export default CountriesList;