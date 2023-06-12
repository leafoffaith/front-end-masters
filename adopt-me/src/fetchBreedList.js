const fetchPet = async ({ queryKey }) => {

    //the 1 is the index of the id in the queryKey array
    //check details.jsx for more info
    const animal = queryKey[1];

    if (!animal) return [];

    const apiRes = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

    if (!apiRes.ok) {
        throw new Error(`breeds/${animal} fetch not ok`);
    }

    return apiRes.json();
};

export default fetchBreedList;