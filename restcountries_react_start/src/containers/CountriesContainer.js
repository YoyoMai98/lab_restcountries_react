import { useState, useEffect } from "react";

import CountriesList from "../components/CountriesList";
import CountryDetail from "../components/CountryDetail";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState()
    const [term, setTerm] = useState("")
    const [searched, setSearched] = useState(false)
    const [selected, setSelected] = useState(null)

    const fetchCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(jsonData => setCountries(jsonData))
    }

    const addVisitedCountry = (country) => {
        if(visitedCountries.includes(country)){
            alert("You have added this country!")
        }else{
            country.visited = true
            setVisitedCountries([...visitedCountries, country])
            setCountries(countries)
        }
    }

    const selectCountry = country => {
        setSelected(country)
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

    const handleOnClick = event => {
        event.preventDefault()
        setSearched(true)
    }

    useEffect(() => {
        fetchCountries();
        for(const country of countries){
            country.visited = false
        }
        setCountries(countries)
        if(term && searched){
            searchForACountry(term)
            setSearched(false)
            setTerm("")
        }
    }, [countries, term, searched])

    return(
        <>
            <VisitedCountriesList
                visitedCountries={visitedCountries}
                selectCountry={selectCountry}
            />
            <div className="search-title">
                <h2>All the Countries</h2>
                <form className="search">
                    <input type="search" placeholder="country name..." id="search-input" onChange={handleOnChange}/>
                    <button onClick={handleOnClick} id="search-btn">Search</button>
                </form>
            </div>
            <div className="countries">
                <CountriesList
                    countries={filteredCountries ? filteredCountries : countries}
                    selectCountry={selectCountry}
                />
                {selected?
                    <CountryDetail
                        country={selected}
                        addVisitedCountry={addVisitedCountry}
                    /> : <div></div>}
            </div>
        </>
    );
}

export default CountriesContainer;