import axios from "axios"

export const getData = async (path, params = {}, config = {}) => {
    const token = localStorage.getItem("user") ?? "";

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