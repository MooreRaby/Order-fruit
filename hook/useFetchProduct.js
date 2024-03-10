import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProduct = () => {
  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        "http://rest-api.phuquy.info.vn/api/products"
      );
      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetchProduct;
