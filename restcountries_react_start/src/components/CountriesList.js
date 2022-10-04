import CountryListItem from "./CountryListItem";

const CountriesList = ({countries}) => {
    return(
        <>
            <h2>CountriesList here!</h2>
            {countries ? 
                countries.map((country, index) => <CountryListItem country={country.name} key={country+index} />) :
                <p>Loading...</p>
            }
        </>
    );
}

export default CountriesList;