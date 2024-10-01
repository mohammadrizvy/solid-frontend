import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useUser = () => {

    const {data , refetch , isLoading , isError} = useQuery ({
        queryKey : ["users"],
        queryFn : async () => {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/all/users/`);
            return res.data
        }
    })

    return {data , isLoading , isError , refetch}
        
    
};

export default useUser;