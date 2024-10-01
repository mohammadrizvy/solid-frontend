import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const useCategory = () => {
  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/product/categories`
      );
      return res.data.categories;
    },
  });

  
  return { data, refetch, isLoading, error };
};

export default useCategory;
