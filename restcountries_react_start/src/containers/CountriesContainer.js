import { useState, useEffect } from "react";

import CountriesList from "../components/CountriesList";
import Search from "../components/Search";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState()
    const [term, setTerm] = useState("")
    // const [searched, setSearched] = useState(false)

    const fetchCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(jsonData => setCountries(jsonData))
    }

    const markedVisitedCountries = () => {
        // const countryIndex = countries.filter(country => {
        //     return country.name.common.toLowerCase().includes(countryName.toLowerCase())[0]
        // })
        
        // countries[countryIndex].visited = true
        for(let i = 0; i < 10; i++){
            countries[i].visited = true
        }
        return countries
    }

    const searchForACountry = (countryName) => {
        const countryArr = countries.filter(country => {
                return country.name.common.toLowerCase().includes(countryName.toLowerCase())
            })
        setFilteredCountries(countryArr)
    }

    const handleOnChange = event => {
        setTerm(event.target.value)
    }

    // const handleOnClick = () => {
    //     setSearched(true)
    // }

    useEffect(() => {
        fetchCountries();
        for(const country of countries){
            country.visited = false
        }
        setCountries(countries)
        if(countries.length > 0){
            setCountries(markedVisitedCountries())
            setVisitedCountries(countries.filter(country => country.visited))
        }
        if(term){
            // handleOnClick()
            searchForACountry(term)
            // setSearched(false)
            setTerm("")
        }
    }, [countries, term])

    return(
        <>
            <header>
                <h2>Country</h2>
                <form className="search">
                    <input type="search" placeholder="country name..." id="search-input" onChange={handleOnChange}/>
                    {/* <button onClick={handleOnClick} id="search-btn">Search</button> */}
                </form>
            </header>
            <CountriesList countries={filteredCountries ? filteredCountries : countries} />
            <VisitedCountriesList visitedCountries={visitedCountries}/>
        </>
    );
}

export default CountriesContainer;