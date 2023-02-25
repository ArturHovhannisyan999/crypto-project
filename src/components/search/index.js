import React, {useCallback, useEffect, useState} from 'react';
import {API_URL} from "../../core/constants";
import './Search.css'
import Loading from "../loading";
import {useNavigate} from "react-router-dom";
const Search = () => {
    const [allCurrencies, setAllCurrencies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        (async function() {
            const response = await fetch(API_URL)
            const data = await response.json()
            setAllCurrencies(data)
        })()
    }, [allCurrencies])

    const handleSearchCurrency = useCallback((e) => {
        const { value } = e.target
        setSearchQuery(value);

        if(!value.length) {
            setResults([])
            return;
        }
        setLoading(true)
        const symbolsArr = value.split('');
        setTimeout(() => {
            const resultsBySearch = allCurrencies.filter(el => {
                return symbolsArr.every(item => el.id.includes(item))
            })
            setResults(resultsBySearch)
            setLoading(false)
        }, 500)
    }, [allCurrencies])

    const handleRedirect = (id) => {
        navigate(`/currency/${id}`)
        setSearchQuery('')
    }

    const renderSearchResults = useCallback(() => {
        if(!searchQuery){
            return null
        }
        if(searchQuery && !results.length){
            return (
                <div className="Search-result-container">
                    <div className="Search-no-result">
                        No results found.
                    </div>
                </div>
            )
        }
        if(results.length){
            return <div className="Search-result-container">
                {results.map(el =>
                    <div
                        key={el.id}
                        className="Search-result"
                        onClick={() => handleRedirect(el.id)}
                    >
                        {el.name} ({el.symbol})
                    </div>
                )}
            </div>
        }
    }, [searchQuery])
    return (
        <div className='Search'>
            <div>
                <span className="Search-icon" />
                <input
                    type="text"
                    className="Search-input"
                    placeholder="Currency name"
                    onChange={handleSearchCurrency}
                    value={searchQuery}
                />
                {loading && <div className={"Search-loading"}>
                    <Loading
                        width='12px'
                        height='12px'
                    />
                </div>}
            </div>
            {renderSearchResults()}
        </div>
    );
};

export default Search;