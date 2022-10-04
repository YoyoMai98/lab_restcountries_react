import { useState } from "react"

const Search = ({searchForACountry}) => {

    const [term, setTerm] = useState("")

    const handleOnChange = event => {
        setTerm(event.target.value)
    }

    const handleOnClick = () => {
        searchForACountry(term)
        setTerm("")
    }

    return (
        <>
            <form className="search">
                <input type="search" placeholder="country name..." id="search-input" onChange={handleOnChange}/>
                <button onClick={handleOnClick} id="search-btn">Search</button>
            </form>
        </>
    )
}

export default Search