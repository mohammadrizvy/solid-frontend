import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const useCart = () => {
  const { user } = useContext(UserContext); // Get user from context

  // Define the query
  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      if (!user?.email) {
        throw new Error("User not logged in");
      }
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/cart/list/${user.email}`
        );
        return res.data;
      } catch (error) {
        throw new Error(
          error.response?.data?.message || "Failed to fetch cart data"
        );
      }
    },
    enabled: !!user?.email, // Only run the query if user email is available
  });

  return { data, refetch, isLoading, isError };
};

export default useCart;
