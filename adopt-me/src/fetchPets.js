const fetchPet = async(({ queryKey }) => {
    const id = queryKey[1];

    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=`${ id });

    if (!apiRes.ok) {
        throw new Error(`details/${id} fetch not ok`);
    }

    //don't return await apiRes.json() as that will increase 1 tick latency
    return apiRes.json()
}

)