const CountryListItem = ({country}) => {

    return (
        <>
        {country ? <li>{country.common}</li> : <p>Loading...</p> }
        </>
        
    );
}

export default CountryListItem;