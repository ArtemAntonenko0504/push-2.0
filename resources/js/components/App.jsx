import React, { useState } from "react";
import SearchContainer from "./SearchContainer";
import Navigation from "./Navigation";

const App = () => {
    /*
    const [appState, setAppState] = useState({
        filterOptions: {
            apartment: false,
            house: false,
            "1kk": false,
            "1+1": false,
            "2kk": false,
            "2+1": false,
            "3kk": false,
            "3+1": false,
            "4kk": false,
            bigger: false,
            amountFrom: null,
            amountTo: null,
            searchFieldValue: "",
            sizeFrom: null,
            sizeTo: null,
            furnished: false,
            partialyFurnished: false,
            unfurnished: false,
            balconyOrTerrace: false,
            wheelchairAccessible: false,
            basement: false,
            privateParking: false,
            garden: false,
            petsWelcome: false,
            datePicker: null,
        },
    });
    */
    return (
        <>
            <header>
                <Navigation />
            </header>
            <SearchContainer />
        </>
    );
};

export default App;
