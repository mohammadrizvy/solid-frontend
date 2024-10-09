import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../Axios/axiosInstance";

const useOrders = () => {
  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/admin/order/all`
      );
      return res.data.orders;
    },

  });

  return {data, refetch, isError, isLoading};
};

export default useOrders;
