const CountryListItem = ({country, selectCountry}) => {

    const name = country.name
    const flagSrc = country.flags
    
    const handleClick = () => {
        selectCountry(country)
    }

    return (
        <>
        {country ? (
        <li onClick={handleClick}>
            <img src={flagSrc.png} alt={name.common} />
            <span>{name.common}</span>
        </li>) : <p>Loading...</p> }
        </>
        
    );
}

export default CountryListItem;