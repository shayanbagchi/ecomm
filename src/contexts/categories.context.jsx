import { createContext, useState, useEffect } from "react";

import { addCollectionsAndData, getCategoriesAndData } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndData();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);

    // ------------------------------------- To Add products to the database ---------------------- //

    // import SHOP_DATA from '../shop-data.js';

    /*{
        useEffect(() => {
            addCollectionsAndData('categories', SHOP_DATA);
        }, []);
    }*/

    // -------------------------------------------------------------------------------------------- //

    const value={categoriesMap};
    return( 
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}