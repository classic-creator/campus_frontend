import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = ({c}) => {

    const navigate=useNavigate()
      const [keyword, setKeyword] = useState(" ")

      const searchSubmitHendlar = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/${c.link}/${keyword}`)
        } else {
            navigate(`/${c.link}`)
        }
    }
    return (

        <Fragment>

            <form onSubmit={searchSubmitHendlar}>
                <input type="text" onChange={(e) => setKeyword(e.target.value)} />
                <input type="submit" value="Search" />
            </form>


        </Fragment>
    )
}

export default Search