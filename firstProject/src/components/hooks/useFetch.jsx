import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  try {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    };
    useEffect(() => {
      getData();
    }, [url]);
  } catch (error) {
    setError(error);
  }

  return {
    data,
    isLoading: true,
    hasError: error,
  };
};
