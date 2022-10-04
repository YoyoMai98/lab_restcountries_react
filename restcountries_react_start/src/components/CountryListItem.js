const CountryListItem = ({country}) => {

    const name = country.name
    const flagSrc = country.flags
    const capital = country.capital

    return (
        <>
        {country ? (
        <li>
            <img src={flagSrc.png} alt={name.common} />
            <span>{name.common}</span>
            <p>Capital: {capital}</p>
        </li>) : <p>Loading...</p> }
        </>
        
    );
}

export default CountryListItem;