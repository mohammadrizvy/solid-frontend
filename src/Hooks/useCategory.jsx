import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import apiClient from "../Axios/axiosInstance";

const useCategory = () => {
  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/product/categories`
      );
      return res.data.categories;
    },
  });

  
  return { data, refetch, isLoading, isError };
};

export default useCategory;
