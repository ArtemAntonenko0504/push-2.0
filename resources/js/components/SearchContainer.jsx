import React, { useContext, useState } from "react";
import Context from "../Context";
import Type from "./search_components/Type";
import Dispositions from "./search_components/Dispositions";
import Budget from "./search_components/BudgetSelect";
import AreaSize from "./search_components/AreaSize";
import ConditionsApartment from "./search_components/ConditionsApartment";
import SearchLocation from "./search_components/SearchLocation";
import Amenities from "./search_components/Amenities";
import ListingDate from "./search_components/ListingDate";
import PetsWelcome from "./search_components/PetsWelcome";
import { Link } from "react-router-dom";
import "./SearchContainer.scss";
import apartmentBlock from "/resources/img/Background-image.jpg";


const SearchContainer = () => {
    const { dispatch } = useContext(Context);
    const [openMore, setOpenMore] = useState(false);

    const fetchOnResultsPage = () => {
        // If component is rendered on 'results' page
        // dispatch on click to fetch data
        dispatch({
            type: "fetchOnResultsPage",
        });
        // Hide edit form
        dispatch({
            type: "showEditForm",
        });
    };

    const toggleOptions = () => {
        setOpenMore(!openMore);
    };
    // console.log(window.location.href);
    // console.log(import.meta.env.VITE_APP_URL + '/');
    return (
        
        <>
            <div className="search-container" style={{ backgroundImage: `url(${apartmentBlock})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>
                <h2 className="search-container__title">Find your dream home</h2>
                <div className="search-container_filters">
                    <Type />
                    <Dispositions />
                    <SearchLocation />
                    <Budget />
                    <button onClick={toggleOptions} className="more_options_btn">More Options</button>
                        <div className={`more_options ${openMore? ' active': ''}`}>
                            <AreaSize />
                            <ConditionsApartment />
                            <Amenities />
                            <PetsWelcome />
                            <ListingDate />
                        </div>
                       
                    {/* Render buttons based on page url */}
                    {/* {window.location.href === import.meta.env.VITE_APP_URL + '/' 
                    ? (
                        <Link to="/search-results" className="search-form__btn">
                            Search
                        </Link>
                    ) : (
                        <button
                            className="search-form__btn"
                            onClick={fetchOnResultsPage}
                        >
                            Search
                        </button>
                    )} */}
                    <Link to="/search-results" className="search-form__btn">
                            Search
                        </Link>
                </div>
            </div>
        </>
    );
};

export default SearchContainer;
