import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useOrders = () => {
  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/admin/order/all`
      );
      return res.data.orders;
    },

  });

  return {data, refetch, error, isLoading};
};

export default useOrders;
