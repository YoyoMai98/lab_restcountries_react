const CountryListItem = ({country}) => {

    const name = country.name
    const flagSrc = country.flags
    const capital = country.capital

    return (
        <>
        {country ? (
        <li>
            {name.common}
            <img src={flagSrc.png} alt={name.common} />
            <p>capital: {capital}</p>
        </li>) : <p>Loading...</p> }
        </>
        
    );
}

export default CountryListItem;