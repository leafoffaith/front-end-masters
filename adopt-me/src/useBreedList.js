import { useState, useEffect } from "react";

const localCache = {};

//gonna take in animal

export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    //same as componentDidMount and componentDidUpdate
    //this effect changes whenever animal changes
    useEffect(() => {
        if (!animal) {
            //if no breed, set to empty array
            setBreedList([]);
        } else if (localCache[animal]) {
            //if animal is in localCache, set to localCache
            setBreedList(localCache[animal]);
        } else {
            //if animal is not in localCache, fetch from api
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading");

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );
            const json = await res.json();
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("loaded");
        }
    }, [animal]);

    return [breedList, status];
}