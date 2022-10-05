const CountryDetail = ({country, addVisitedCountry}) => {

    const name = country.name
    const capital = country.capital
    const population = country.population

    return (
        <div className="country-detail">
            <span>{name.common}</span>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <button onClick={() => addVisitedCountry(country)}>Add to Visited</button>
        </div>
    )
}

export default CountryDetail