import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useFetchCart = () => {
  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const id = await AsyncStorage.getItem('id')
      const userId = `user${JSON.parse(id)}`;
      const response = await axios.get(`http://rest-api.phuquy.info.vn/api/cart/find/${userId}`);

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  });

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };




  return { data, isLoading, error, refetch };
};

export default useFetchCart;
