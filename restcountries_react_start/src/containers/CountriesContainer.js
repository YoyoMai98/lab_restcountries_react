import { useState, useEffect } from "react";

import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])

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
    }, [countries])

    return(
        <>
            <h1>I'm a country container!</h1>
            <CountriesList countries={countries} />
            <VisitedCountriesList visitedCountries={visitedCountries}/>
        </>
    );
}

export default CountriesContainer;