import { useState } from 'react';
import app from '../../firebase/firebase';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, signInAnonymously } from "firebase/auth";

const FireBaseData = (initialState) => {
    const [userLocationData, setUserLocationData] = useState(initialState);

    const setCountries = (data) => {
        // const postalCodes = [];
        const countries = Object.keys(data).map((key) => {
            const item = data[key];
            // postalCodes.push({ label: item.phone_code, value: item.phone_code });
            return {
                currency: item.currency,
                currency_name: item.currency_name,
                currency_symbol: item.currency_symbol,
                countryId: item.id,
                iso2: item.iso2,
                iso3: item.iso3,
                latitude: item.latitude,
                longitude: item.longitude,
                name: item.name,
                numeric_code: item.numeric_code,
                phone_code: item.phone_code,
                price: item.price,
                label: item.name,
                value: item.id
                // Add more fields as needed
            };
        });
        setUserLocationData((prevLocationData) => ({
            ...prevLocationData,
            "countries": [...countries],
        }));
    }

    const setStates = (data) => {
        const states = Object.keys(data).map((key) => {
            const item = data[key];
            return {
                ...item,
                label: item.name,
                value: item.id
                // Add more fields as needed
            };
        });
        setUserLocationData((prevLocationData) => ({
            ...prevLocationData,
            "states": [...states],
        }));
    }

    const setCities = (data) => {
        const cities = Object.keys(data).map((key) => {
            const item = data[key];
            return {
                ...item,
                label: item.name,
                value: item.id
                // Add more fields as needed
            };
        });
        setUserLocationData((prevLocationData) => ({
            ...prevLocationData,
            "cities": [...cities]
        }));
    }

    const loadCountries = () => {
        const auth = getAuth();
        signInAnonymously(auth)
            .then(async () => {
                // Signed in..
                const db = getDatabase(app);
                const dataRef = ref(db, 'countries');
                const snapshot = await get(dataRef);
                if (snapshot.exists()) {
                    setCountries(snapshot.val());
                }
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ...
            });
    }

    const loadStates = (countryId) => {
        const auth = getAuth();
        signInAnonymously(auth)
            .then(async () => {
                // Signed in..
                const db = getDatabase(app);
                const dataRef = ref(db, 'states/' + countryId);
                const snapshot = await get(dataRef);
                if (snapshot.exists()) {
                    setStates(snapshot.val());
                }
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // ...
            });
    }

    const loadCities = (countryId, stateId) => {
        const auth = getAuth();
        signInAnonymously(auth)
            .then(async () => {
                // Signed in..
                const db = getDatabase(app);
                const dataRef = ref(db, 'cities/' + countryId + '/' + stateId);
                const snapshot = await get(dataRef);
                if (snapshot.exists()) {
                    setCities(snapshot.val());
                }
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ...
            });
    }

    const resetStates = () => {
        setUserLocationData((prevLocationData) => ({
            ...prevLocationData,
            "states": []
        }));
    }

    const resetCities = () => {
        setUserLocationData((prevLocationData) => ({
            ...prevLocationData,
            "cities": []
        }));
    }



    return {
        userLocationData,
        setCountries,
        setStates,
        setCities,
        loadCountries,
        loadStates,
        loadCities,
        resetStates,
        resetCities
    };
};
export default FireBaseData;

