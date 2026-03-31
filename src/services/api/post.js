import axios from "axios"

export const postData = async (path, params) => {

    try {
        const response = await axios.post('https://dummyjson.com/'+ path, {
            params: params
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        })
        
        return response.data ?? null;

    } catch (error) {
        console.error("Error fetching post data:", error);
        return null;
    }
}