import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./search.css"

const Search = (props) => {

    const navigate=useNavigate()
      const [keyword, setKeyword] = useState(" ")

      const searchSubmitHendlar = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/${props.link}/${keyword}`)
        } else {
            navigate(`/${props.link}`)
        }
    }
    return (

        <Fragment>

            <form onSubmit={searchSubmitHendlar} className="search">
               <FontAwesomeIcon icon={faSearch}/> <input type="text" placeholder={props.placeholder} onChange={(e) => setKeyword(e.target.value)} />
                <input type="submit"  value="Search" />
            </form>


        </Fragment>
    )
}

export default Search