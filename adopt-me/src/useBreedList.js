// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";


import fetchBreedList from "./fetchBreedList";
// const localCache = {};

//gonna take in animal

export default function useBreedList(animal) {


    const results = useQuery(["breeds", animal], fetchBreedList);


    //question marks check if results is null or undefined else just give empty array
    return [results?.data?.breeds ?? [], results.status];
}

//==============================================================================================================================================//

/*
    @DEPRECATED replaced with useQuery above

        const [breedList, setBreedList] = useState([]);
        const [status, setStatus] = useState("unloaded");

    same as componentDidMount and componentDidUpdate
    this effect changes whenever animal changes
    useEffect(() => {
        if (!animal) {
            //if no breed, set to empty array
            setBreedList([]);
        } elseconst fetchPet = async ({ queryKey }) => {
            const id = queryKey[1];
            const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

            if (!apiRes.ok) {
                throw new Error(`details/${id} fetch not ok`);
            }

            return apiRes.json();
        };

        export default fetchPet; if (localCache[animal]) {
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

*/
