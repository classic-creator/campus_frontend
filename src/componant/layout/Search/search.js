
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
             
                <input type="text" placeholder={props.placeholder} onChange={(e) => setKeyword(e.target.value)} />
                <input type="submit"  value=" &#128270;"/>
                {/* <button type="submit" >
                <i class="bi bi-search"></i>
</button> */}

                {/* <i type='submit' class="bi bi-search"></i> */}
            </form>


        </Fragment>
    )
}

export default Search