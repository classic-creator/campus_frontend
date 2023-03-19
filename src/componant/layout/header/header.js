import React, { useEffect } from 'react'
import './Navbar.css';
import {  NavLink } from 'react-router-dom';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookAtlas, faBuilding, faCheck,  faHomeAlt,  faUserAlt,  } from '@fortawesome/free-solid-svg-icons'
import Search from '../../college/collegecardAndComponent/search';

const Header = () => {

    function animation() {
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click", "li", function (e) {
            $('#navbarSupportedContent ul li').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "top": itemPosNewAnimTop.top + "px",
                "left": itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });
    }

    useEffect(() => {

        animation();
        $(window).on('resize', function () {
            setTimeout(function () { animation(); }, 500);
        });

    }, []);

   

   const c={
        link:"colleges"
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">

            <NavLink className="navbar-brand navbar-logo" to="/" exact>
                CAMPUS
            </NavLink>


            <button
                className="navbar-toggler"
                onClick={function () {
                    setTimeout(function () { animation(); });
                }}
                type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>

            <div
                className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">

                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                   

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/colleges" exact>
                            <i>
                                <FontAwesomeIcon icon={faHomeAlt} />
                            </i>Home
                        </NavLink>
                    </li>


                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact>
                            <i>
                                <FontAwesomeIcon icon={faBuilding} />
                            </i> Colleges

                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/courses" exact>
                            <i>
                                <FontAwesomeIcon icon={faBookAtlas} />
                            </i>Courses
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/desbord" exact>
                            <i>
                                <FontAwesomeIcon icon={faCheck} />
                            </i>My Application
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login" exact>
                            <i>
                                <FontAwesomeIcon icon={faUserAlt} />
                            </i>Profile
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Search c={c}/>
        </nav>
    )
}

export default Header