import { useEffect, useState } from "react";
import axios from "axios";

const useAxiosGet = (url) => {
  const BASEURL = "https://jsonplaceholder.typicode.com/";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(BASEURL + url);
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return {data, loading, error};
}

export default useAxiosGet;