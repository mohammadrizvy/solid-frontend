import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useProduct = () => {
    const {data , refetch, isLoading, error} = useQuery({
        queryKey : ["products"],
        queryFn : async () => {
            const res = await axios.get(
              `${import.meta.env.VITE_BACKEND_URL}/all/product`
            );
            return res.data.sps
        }
    })
    console.log(data)
    return {data , refetch , isLoading, error }
};

export default useProduct;