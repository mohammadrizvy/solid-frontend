import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCart = () => {
  // Define the query
  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/cart/list/`
      );
      return res.data;
    },
  });

  // Ensure `data.patcs` is accessible and log it if it exists

  return { data, refetch, isLoading, error };
};

export default useCart;

// !Might need later :
// if (data && data.patcs) {
  // console.log(data.patcs);
// }