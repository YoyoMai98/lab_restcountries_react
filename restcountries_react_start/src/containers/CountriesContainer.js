import { useState, useEffect } from "react";

import CountriesList from "../components/CountriesList";
import CountryDetail from "../components/CountryDetail";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState()
    const [term, setTerm] = useState("")
    // const [searched, setSearched] = useState(false)
    const [selected, setSelected] = useState(null)

    const fetchCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(jsonData => setCountries(jsonData))
    }

    const addVisitedCountry = (country) => {
        if(visitedCountries.includes(country)){
            alert("You have added this country!")
            console.log(country)
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

    // const handleOnClick = () => {
    //     setSearched(true)
    // }

    useEffect(() => {
        fetchCountries();
        for(const country of countries){
            country.visited = false
        }
        setCountries(countries)
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
                <h2>Countries and Visited Countries</h2>
                <form className="search">
                    <input type="search" placeholder="country name..." id="search-input" onChange={handleOnChange}/>
                    {/* <button onClick={handleOnClick} id="search-btn">Search</button> */}
                </form>
            </header>
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
            <VisitedCountriesList
                visitedCountries={visitedCountries}
                selectCountry={selectCountry}
            />
        </>
    );
}

export default CountriesContainer;