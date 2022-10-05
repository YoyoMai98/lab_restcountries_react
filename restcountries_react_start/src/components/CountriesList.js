import CountryListItem from "./CountryListItem";

const CountriesList = ({countries, selectCountry}) => {
    return(
        <>
            <ul className="countries-list">
            {countries ? 
                countries.map((country, index) =>
                <CountryListItem
                    country={country}
                    key={country+index}
                    selectCountry={selectCountry}
                />) :
                <p>Loading...</p>
            }
            </ul>
        </>
    );
}

export default CountriesList;