import axios from "axios"

export const getData = async (path, params = {}, config = {}) => {

    try {
        const response = await axios.get('https://dummyjson.com/' + path, {
            params: params,
            headers: {
                'Content-Type': 'application/json',
            },
            ...config
        });

        return response.data ?? null;

    } catch (error) {
        console.error("Error fetching post data:", error);

        return null;
    }
}