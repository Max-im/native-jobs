import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (endpoint, params) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params,
        headers: {
            'x-rapidapi-key': process.env.EXPO_PUBLIC_RAPIDAPI_KEYs,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
    };

    async function fetchData() {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
        } catch (error) {
            console.error(error);
            const message = error.response?.data?.message || 'An error occurred';
            setError(message);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = async () => {
        fetchData();
    }

    return { error, isLoading, data, refetch };
}