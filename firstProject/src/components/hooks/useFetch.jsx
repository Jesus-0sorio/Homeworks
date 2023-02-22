import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(true);
    }
  };
  useEffect(() => {
    getData();
  }, [url]);

  return {
    data,
    isLoading: loading,
    hasError: error,
  };
};
